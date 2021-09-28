from django.views.generic import TemplateView

from plans.models import UserWalletTransaction
from users.models import Husband, UserWallet
from django.http import HttpResponse, HttpResponseNotFound
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from posts.models import Post, Comment, CommentReply,Thread
from django.contrib import messages
from django.urls import reverse
from .forms import HusbandManageForm, PostManageForm
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
    url = request.path
    if request.method == 'POST':
        form = HusbandManageForm(request.POST,instance=husband_qs)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('user_profile'))
    context = {'form': form}
    return render(request, 'user-panel/form.html', context)

# #-----------------------------***-----------------------------
# #------------------------ Create Post ------------------------
# #-----------------------------***-----------------------------

# @login_required()
# def create_post(request):


def add_post(request, user, title, thread, weight, description,user_wallet_qs, form):
    if weight > 0:
        if weight <= user_wallet_qs.first().available_points:
            post_qs = Post.objects.create(user=user, title=title, thread_id=thread,
                                          weight=weight, description=description)
            new_user_available_points = user_wallet_qs.first().available_points - int(weight)
            user_wallet_qs.update(available_points=new_user_available_points)
            if post_qs:
                return post_qs
        else:
            return HttpResponseRedirect(reverse('create_post'))

    # -----***----- For Post Thread Weight -----***-----
    else:
        thread_points = Thread.objects.filter(id=thread).first()
        if thread_points:
            new_weight = thread_points.weight
            if thread_points.weight <= user_wallet_qs.first().available_points:
                post_qs = Post.objects.create(user=user, title=title, thread_id=thread,
                                              weight=new_weight, description=description)
                new_user_available_points = user_wallet_qs.first().available_points - thread_points.weight
                user_wallet_qs.update(available_points=new_user_available_points)
                if post_qs:
                    return post_qs
            else:
                return HttpResponseRedirect(reverse('create_post'))
        else:
            return HttpResponseNotFound('<h4> Thread Not Fund </h4>')
# post_qs = add_post(request, user, title, thread, weight, description,user_wallet_qs, form)
#                         if post_qs:
#                             return HttpResponseRedirect(reverse('user_profile'))

@login_required()
def create_post(request):
# template_name = "user-panel/husband.html"
    form = PostManageForm

    if request.method == 'POST':
        if request.user.is_authenticated:
            user = request.user
            title = request.POST.get('title')
            thread = request.POST.get('thread')
            weight = int(request.POST.get('weight'))
            description = request.POST.get('description')
            # check_func(request)
            user_wallet_transaction_qs = UserWalletTransaction.objects.filter(user = user).first()
            if user_wallet_transaction_qs:
                user_wallet_qs = UserWallet.objects.filter(user=user_wallet_transaction_qs.user)
                if user_wallet_qs:
                    # -----***----- For Flat Rate -----***-----
                    if not user_wallet_transaction_qs.transaction_type == 1:
                        # -----***----- For Post Weight -----***-----
                        # check_func(request, weight,user_wallet_qs, user,title, thread, weight, description,)
                        post_qs = add_post(request, user, title, thread, weight, description,user_wallet_qs, form)
                        if post_qs:
                            return HttpResponseRedirect(reverse('user_profile'))
                        else:
                            return HttpResponseRedirect(reverse('create_post'))
                    # -----***----- For Point Rate -----***-----
                    else:
                        is_flat_rate_plan = user_wallet_qs.first().is_in_flat_plan
                        if not is_flat_rate_plan:
                            post_qs = add_post(request, user, title, thread, weight, description, user_wallet_qs, form)
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
                                    user_wallet_qs.update(is_in_flat_plan = False,
                                                          flat_plan_created_at=None)
                            elif expiration_cycle == 1:
                                if days.days < 366:
                                    post_qs = add_post(request, user, title, thread, weight, description,
                                                       user_wallet_qs, form)
                                    if post_qs:
                                        return HttpResponseRedirect(reverse('user_profile'))
                                    else:
                                        return HttpResponseRedirect(reverse('create_post'))
                                else:
                                    user_wallet_qs.update(is_in_flat_plan = False,
                                                          flat_plan_created_at=None)
                            else:
                                post_qs = add_post(request, user, title, thread, weight, description, user_wallet_qs,
                                                   form)
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
    post_qs = Post.objects.filter(slug=slug).last()
    page_title = post_qs.title
    form = PostManageForm(instance=post_qs)
    context = {'form': form,'post_qs':post_qs,'page_title':page_title}

    if request.method == 'POST':
        if request.user.is_authenticated:
            comment = request.POST.get("comment")
            if comment:
                Comment.objects.create(
                    post=post_qs,
                    commented_by=request.user,
                    comment=comment
                )
            return HttpResponseRedirect(reverse("post_details", kwargs={"slug": slug}))
        else:
            return HttpResponseRedirect(reverse("account_login"))


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
