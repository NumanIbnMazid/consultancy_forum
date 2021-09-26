from django.views.generic import TemplateView

from plans.models import UserWalletTransaction
from users.models import Husband, UserWallet
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from posts.models import Post, Comment, CommentReply,Thread
from django.contrib import messages
from django.urls import reverse
from .forms import HusbandManageForm, PostManageForm
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.views import View


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
    context = {'husband_lists':husband_lists,
               'post_lists':post_lists,'page_title':page_title,
               'user_wallet':user_wallet}
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

@login_required()
def create_post(request):
    # template_name = "user-panel/husband.html"
    form = PostManageForm

    if request.method == 'POST':
        if request.user.is_authenticated:
            user = request.user
            title = request.POST.get('title')
            thread = request.POST.get('thread')
            weight = request.POST.get('weight')
            description = request.POST.get('description')
            user_wallet_transaction_qs = UserWalletTransaction.objects.filter(user = user).last()
            # -----***----- For Flat Rate -----***-----
            if user_wallet_transaction_qs.transaction_type == 0:
                user_wallet_qs = UserWallet.objects.filter(user = user_wallet_transaction_qs.user)
                # -----***----- For Post Weight -----***-----
                if int(weight) > 0:
                    if int(weight) <= user_wallet_qs.last().available_points:
                        post_qs = Post.objects.create(user=user, title=title, thread_id=thread,
                                                      weight=weight, description=description)
                        if post_qs:
                            return HttpResponseRedirect(reverse('user_profile'))
                        new_user_available_points = user_wallet_qs.last().available_points - int(weight)
                        user_wallet_qs.update(available_points = new_user_available_points)
                    else:
                        return HttpResponseRedirect(reverse('create_post'))
                # -----***----- For Post Thread Weight -----***-----
                else:
                    thread_points = Post.objects.filter(thread_id = thread).last()
                    if thread_points.thread.weight <= user_wallet_qs.last().available_points:
                        post_qs = Post.objects.create(user=user, title=title, thread_id=thread,
                                                      weight=weight, description=description)
                        new_user_available_points = user_wallet_qs.last().available_points - thread_points.thread.weight
                        user_wallet_qs.update(available_points=new_user_available_points)
                        if post_qs:
                            return HttpResponseRedirect(reverse('user_profile'))
                    else:
                        pass

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
