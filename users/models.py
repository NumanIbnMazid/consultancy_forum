from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from bbs.utils import simple_random_string
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model


def generate_username_from_email(email):
    return email.split("@")[0][:15] + "__" + simple_random_string()

class UserManager(BaseUserManager):

    def _create_user(self, email, password, is_staff, is_superuser, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        now = timezone.now()
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            is_staff=is_staff,
            is_active=True,
            is_superuser=is_superuser,
            last_login=now,
            date_joined=now,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password, **extra_fields):
        return self._create_user(email, password, False, False, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        user = self._create_user(email, password, True, True, **extra_fields)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):

    class Gender(models.IntegerChoices):
        MALE = 0, _("Male")
        FEMALE = 1, _("Female")
        OTHERS = 2, _("Others")

    class MembershipType(models.IntegerChoices):
        REGULAR = 0, _("Regular")
        SENIOR = 1, _("Senior")

    email = models.EmailField(
        max_length=254, unique=True
    )
    username = models.CharField(
        max_length=254, unique=True
    )
    name = models.CharField(
        max_length=254, null=True, blank=True
    )
    gender = models.SmallIntegerField(
        choices=Gender.choices, default=1
    )
    contact_number = models.CharField(
        max_length=30, blank=True, null=True
    )
    dob = models.DateField(
        blank=True, null=True, verbose_name="date of birth"
    )
    address = models.CharField(
        max_length=254, blank=True, null=True
    )
    membership_type = models.SmallIntegerField(
        choices=MembershipType.choices, default=0
    )
    marriage_experience = models.TextField(
        blank=True, null=True
    )
    purpose_of_use = models.TextField(
        blank=True, null=True
    )
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def get_absolute_url(self):
        return "/users/%i/" % (self.pk)

    def __str__(self):
        return self.get_dynamic_username()
    
    def get_dynamic_username(self):
        """ Get a dynamic username for a specific user instance. if the user has a name then returns the name, if the user does not have a name but has a username then return username, otherwise returns email as username """
        if not self.name == None and not self.name == "":
            return self.name
        elif not self.username == None and not self.username == "":
            return self.username
        return self.email

    def get_membership_type(self):
        if self.membership_type == 1:
            return "Senior"
        return "Regular"

    def get_gender(self):
        if self.gender == 0:
            return "Male"
        elif self.gender == 1:
            return "Female"
        return "Others"


@receiver(pre_save, sender=User)
def update_username_from_email(sender, instance, **kwargs):
    """ Generates and updates username from user email on User pre_save hook """
    instance.username = generate_username_from_email(email=instance.email)


class UserWallet(models.Model):
    user = models.OneToOneField(
        get_user_model(), on_delete=models.CASCADE, related_name="user_wallet_user"
    )
    available_points = models.PositiveIntegerField(
        default=0
    )
    is_in_flat_plan = models.BooleanField(
        default=False
    )
    flat_plan_created_at = models.DateTimeField(
        null=True
    )
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='created at'
    )
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='updated at'
    )

    class Meta:
        verbose_name = ("User Wallet")
        verbose_name_plural = ("User Wallets")
        ordering = ["-created_at"]

    def __str__(self):
        return self.user.get_dynamic_username()
    

@receiver(post_save, sender=User)
def assign_user_wallet_on_pre_save(sender, instance, **kwargs):
    """ Assigns Wallet to User on User pre_save hook """
    try:
        print("User Instance: ", instance)
        UserWallet.objects.create(
            user=instance
        )
    except Exception as E:
        raise Exception(
            f"Failed to create user wallet! Exception: {str(E)}"
        )
