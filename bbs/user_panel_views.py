from django.views.generic import TemplateView

from plans.models import UserWalletTransaction
from users.models import Husband, UserWallet, User
from django.http import HttpResponse, HttpResponseNotFound
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from posts.models import Post, Comment, CommentReply,Thread
from django.contrib import messages
from django.urls import reverse
from .forms import HusbandManageForm, PostManageForm, UserManageForm
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.views import View
from datetime import date, datetime, timedelta
from django.utils import timezone

# #-----------------------------***-----------------------------
# #---------------------------- Home ---------------------------
# #-----------------------------***-----------------------------


class HomeView(TemplateView):
    template_name = "user-panel/index.html"
    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        thread_lists = Thread.objects.all()
        post_lists = Post.objects.all().distinct()
        context["page_title"] = "Home"
        context['page_title'] ='Thread lists'
        context['thread_lists'] =thread_lists
        context['post_lists'] =post_lists
        return context

# #-----------------------------***-----------------------------
# #------------------------ User Available Point -----------------------
# #-----------------------------***-----------------------------
def check_available_point(request, user_qs):
    if user_qs:
        user_wallet_qs = UserWallet.objects.filter(user_id = user_qs).order_by('created_at').last()
        if user_wallet_qs:
            user_available_points = user_wallet_qs.available_points
            return user_available_points
        else:
            return False
    else:
        return False


def check_user_transaction_type(request,post_qs, user_wallet_transaction_qs, user_wallet_qs):
    if not post_qs:
        return False
    if user_wallet_transaction_qs.transaction_type == 1:
        is_flat_rate_plan = user_wallet_qs.first().is_in_flat_plan
        if not is_flat_rate_plan:
            return True
        today = timezone.datetime.now().date()
        flat_plan_created_date = user_wallet_qs.first().flat_plan_created_at
        flat_rate_plan_qs = user_wallet_transaction_qs.flat_rate_plan
        days = today - flat_plan_created_date.date()
        expiration_cycle = flat_rate_plan_qs.expiration_cycle
        if expiration_cycle == 0:
            if days.days < 31:
                return True
        elif expiration_cycle == 1:
            if days.days < 366:
                return True
        elif expiration_cycle == 2:
            return True
        else:
            return False
    else:
        return True

def user_wallet_update(user_wallet_qs, post_weight):
    if user_wallet_qs and post_weight:
        new_user_available_points = user_wallet_qs.first().available_points - post_weight
        user_wallet_qs.update(available_points=new_user_available_points)
    return True


# #-----------------------------***-----------------------------
# #------------------------ User Profile -----------------------
# #-----------------------------***-----------------------------

@login_required()
def user_profile(request):
    page_title = request.user.username
    husband_lists = Husband.objects.filter(user  = request.user)
    post_lists = Post.objects.filter(user = request.user)
    user_wallet = UserWallet.objects.filter(user = request.user).last()
    user_wallet_transaction = UserWalletTransaction.objects.filter(user = request.user).first()
    context = {'husband_lists':husband_lists,
               'post_lists':post_lists,'page_title':page_title,
               'user_wallet':user_wallet,'user_wallet_transaction':
               user_wallet_transaction}
    return render(request,'user-panel/profile.html', context)

# #-----------------------------***-----------------------------
# #------------------------ Profile Update-----------------------
# #-----------------------------***-----------------------------
def user_profile_update(request, slug):
    user_qs = User.objects.filter(slug = slug).order_by('date_joined').last()
    form = UserManageForm(instance=user_qs)
    if request.method == 'POST':
        form = UserManageForm(request.POST,instance=user_qs)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('user_profile'))
    context = {'form': form}
    return render(request, 'user-panel/form.html', context)
# #-----------------------------***-----------------------------
# #------------------------ Husband Create ---------------------
# #-----------------------------***-----------------------------
@login_required()
def create_husband(request):
    # template_name = "user-panel/husband.html"
    form = HusbandManageForm

    if request.method == 'POST':
        if request.user.is_authenticated:
            user = request.user
            name = request.POST.get('name')
            nationality = request.POST.get('nationality')
            address = request.POST.get('address')
            dob = request.POST.get('dob')
            characteristics = request.POST.get('characteristics')
            husband_qs = Husband.objects.filter(name__iexact = name).last()
            if not husband_qs:
                husband_qs = Husband.objects.create(user = user, name = name,
                                                    nationality = nationality,address = address,
                                                    dob=dob,characteristics=characteristics)
                if husband_qs:
                    return HttpResponseRedirect(reverse('user_profile'))
    context ={'form':form}
    return render(request, 'user-panel/form.html', context)


# #-----------------------------***-----------------------------
# #------------------------ Husband Details --------------------
# #-----------------------------***-----------------------------

@login_required()
def husband_details(request, slug):
    husband_qs = Husband.objects.filter(slug=slug).last()
    form = HusbandManageForm(instance=husband_qs)
    is_details = True
    context = {'form': form,'is_details':is_details}
    return render(request, 'user-panel/form.html', context)

# #-----------------------------***-----------------------------
# #------------------------ Husband Update ---------------------
# #-----------------------------***-----------------------------

@login_required()
def husband_update(request, slug):
    husband_qs = Husband.objects.filter(slug=slug).last()
    form = HusbandManageForm(instance=husband_qs)
    # url = request.path
    if request.method == 'POST':
        form = HusbandManageForm(request.POST,instance=husband_qs)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('user_profile'))
    context = {'form': form}
    return render(request, 'user-panel/form.html', context)


# #----------------------------------------****----------------------------------------
# #------------------------------------- Post Create --------------------------------------
# #----------------------------------------****----------------------------------------

def add_post(request, user, title, thread, weight, description,user_wallet_qs):
    if weight <= user_wallet_qs.first().available_points:
        Post.objects.create(user=user, title=title, thread_id=thread,
                                      description=description)
        new_user_available_points = user_wallet_qs.first().available_points - weight
        user_wallet_qs.update(available_points=new_user_available_points)
        return True
    else:
        return False

    # if weight > 0:
    #     if weight <= user_wallet_qs.first().available_points:
    #         post_qs = Post.objects.create(user=user, title=title, thread_id=thread,
    #                                       weight=weight, description=description)
    #         new_user_available_points = user_wallet_qs.first().available_points - int(weight)
    #         user_wallet_qs.update(available_points=new_user_available_points)
    #         if post_qs:
    #             return post_qs
    #     else:
    #         return HttpResponseRedirect(reverse('create_post'))
    #
    # # -----***----- For Post Thread Weight -----***-----
    # else:
    #     # thread_points = Thread.objects.filter(id=thread).first()


# #----------------------------------------****----------------------------------------
# #--------------------------------------- Post ----------------------------------------
# #----------------------------------------****----------------------------------------
@login_required()
def create_post(request):

# template_name = "user-panel/husband.html"

    form = PostManageForm
    if request.method == 'POST':
        if request.user.is_authenticated:
            user = request.user
            title = request.POST.get('title')
            thread = request.POST.get('thread')
            description = request.POST.get('description')
            thread_weight_qs = Thread.objects.filter(id=thread).order_by('-created_at').first()
            weight = thread_weight_qs.weight
            user_wallet_transaction_qs = UserWalletTransaction.objects.filter(user = user).order_by('-created_at').first()
            if user_wallet_transaction_qs:
                user_wallet_qs = UserWallet.objects.filter(user=user_wallet_transaction_qs.user).order_by('-created_at')
                if user_wallet_qs:
                    # -----***----- For Flat Rate -----***-----
                    if not user_wallet_transaction_qs.transaction_type == 1:
                        # -----***----- For Post Weight -----***-----
                        # check_func(request, weight,user_wallet_qs, user,title, thread, weight, description,)
                        post_qs = add_post(request, user, title, thread, weight, description,user_wallet_qs)
                        if post_qs:
                            return HttpResponseRedirect(reverse('user_profile'))
                        else:
                            return HttpResponseRedirect(reverse('create_post'))
                    # -----***----- For Point Rate -----***-----
                    else:
                        is_flat_rate_plan = user_wallet_qs.first().is_in_flat_plan
                        if not is_flat_rate_plan:
                            post_qs = add_post(request, user, title, thread, weight, description, user_wallet_qs)
                            if post_qs:
                                return HttpResponseRedirect(reverse('user_profile'))
                            else:
                                return HttpResponseRedirect(reverse('create_post'))

                        else:
                            today = timezone.datetime.now().date()
                            x = user_wallet_qs.first().flat_plan_created_at
                            y = user_wallet_transaction_qs.flat_rate_plan
                            days = today - x.date()
                            expiration_cycle = y.expiration_cycle
                            if expiration_cycle == 0:
                                if days.days < 31:
                                    post_qs = add_post(request, user, title, thread, weight, description,
                                                       user_wallet_qs, form)
                                    if post_qs:
                                        return HttpResponseRedirect(reverse('user_profile'))
                                    else:
                                        return HttpResponseRedirect(reverse('create_post'))

                                else:
                                    user_wallet_qs.update(is_post_detailsin_flat_plan = False,
                                                          flat_plan_created_at=None)
                            elif expiration_cycle == 1:
                                if days.days < 366:
                                    post_qs = add_post(request, user, title, thread, weight, description,
                                                       user_wallet_qs)
                                    if post_qs:
                                        return HttpResponseRedirect(reverse('user_profile'))
                                    else:
                                        return HttpResponseRedirect(reverse('create_post'))
                                else:
                                    user_wallet_qs.update(is_in_flat_plan = False,
                                                          flat_plan_created_at=None)
                            else:
                                post_qs = add_post(request, user, title, thread, weight, description, user_wallet_qs
                                                   )
                                if post_qs:
                                    return HttpResponseRedirect(reverse('user_profile'))
                                else:
                                    return HttpResponseRedirect(reverse('create_post'))
                else:
                    return HttpResponseNotFound('<h4>user wallet not Found</h4>')
            else:
                return HttpResponseNotFound('<h4> user wallet transaction not Found </h4>')

    context ={'form':form}
    return render(request, 'user-panel/form.html', context)

# #-----------------------------***-----------------------------
# #------------------------ Post Details ------------------------
# #-----------------------------***-----------------------------

@login_required()
def post_details(request, slug):
    post_qs = Post.objects.filter(slug=slug).order_by('created_at').last()
    page_title = post_qs.title
    form = PostManageForm(instance=post_qs)
    available_point = check_available_point(request, post_qs.user_id)

    if post_qs.weight > 0:
        post_weight = post_qs.weight
    else:
        post_weight = post_qs.thread.weight

    user_wallet_transaction_qs = UserWalletTransaction.objects.filter(user=request.user).order_by('created_at').last()
    if not user_wallet_transaction_qs:
        return HttpResponseNotFound('<h3> user wallet transaction not found</h3>')
    user_wallet_qs = UserWallet.objects.filter(user=user_wallet_transaction_qs.user).order_by('created_at')
    if not user_wallet_qs:
        return HttpResponseNotFound('<h3> user wallet not found</h3>')

    transaction_type = check_user_transaction_type(request,post_qs, user_wallet_transaction_qs, user_wallet_qs)
    if not transaction_type:
        return HttpResponseNotFound('<h3> Return False</h3>')

    context = {'form': form,'post_qs':post_qs,'page_title':page_title,
               'available_point':available_point,
               'post_weight':post_weight}

    if post_weight <= available_point:
        if request.method == 'POST':
            if request.user.is_authenticated:
                comment = request.POST.get("comment")
                if comment:
                    Comment.objects.create(
                        post=post_qs,
                        commented_by=request.user,
                        comment=comment
                    )
                    # -------------- User Wallet Update --------------
                    user_wallet_update(user_wallet_qs, post_weight)
                return HttpResponseRedirect(reverse("post_details", kwargs={"slug": slug}))
            else:
                return HttpResponseRedirect(reverse("account_login"))
    else:
        return HttpResponseNotFound('<h3> User Does not available points</h3>')

    return render(request, 'user-panel/post-details.html', context)

# #-----------------------------***-----------------------------
# #------------------------ Post Update ------------------------
# #-----------------------------***-----------------------------

@login_required()
def post_update(request, slug):
    post_qs = Post.objects.filter(slug=slug).last()
    form = PostManageForm(instance=post_qs)
    if request.method == 'POST':
        form = PostManageForm(request.POST,instance=post_qs)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('user_profile'))
    context = {'form': form}
    return render(request, 'user-panel/form.html', context)

# #-----------------------------***-----------------------------
# #------------------------ Post Delete ------------------------
# #-----------------------------***-----------------------------

@login_required()
def post_delete(request, slug):
    post_qs = Post.objects.filter(slug=slug).last()
    form = PostManageForm(instance=post_qs)
    if post_qs:
        post_qs.delete()
        return HttpResponseRedirect(reverse('user_profile'))
    context = {'form': form}
    return render(request, 'user-panel/form.html', context)


# #-----------------------------***-----------------------------
# #----------------------Post Comment Reply --------------------
# #-----------------------------***-----------------------------
@login_required()
def comment_reply(request, id):
    comment_qs = Comment.objects.filter(id=id)
    if comment_qs:
        comment_object = comment_qs.last()
        slug = comment_object.post.slug
        post_qs = Post.objects.filter(slug=slug).last()
        page_title = post_qs.title
        form = PostManageForm(instance=post_qs)
        context = {'form': form,'post_qs':post_qs,'page_title':page_title}

        if request.method == 'POST':
            if request.user.is_authenticated:
                reply = request.POST.get("reply")
                if reply:
                    CommentReply.objects.create(
                        comment=comment_object,
                        replied_by=request.user,
                        reply=reply
                    )
                return HttpResponseRedirect(reverse("post_details", kwargs={"slug": slug}))
            else:
                return HttpResponseRedirect(reverse("account_login"))


    return render(request, 'user-panel/post-details.html', context)

#
def post_list(request, slug):
    thread_qs = Thread.objects.filter(slug = slug).last()
    post_lists = Post.objects.filter(thread = thread_qs)
    context = {'page_title':thread_qs.title,
               'thread_qs':thread_qs, 'post_lists':post_lists}
    return render(request, 'user-panel/post_list.html', context)
