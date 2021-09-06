from django.views.generic import TemplateView, CreateView, UpdateView, DetailView
from bbs.decorators import has_dashboard_permission_required
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse
from django.contrib import messages
from bbs.helpers import (
    validate_normal_form, get_simple_context_data, get_simple_object, delete_simple_object, user_has_permission
)
from posts.forms import (
    ThreadManageForm
)
from posts.models import (
    Thread
)

dashboard_decorators = [login_required, has_dashboard_permission_required]


@method_decorator(dashboard_decorators, name='dispatch')
class DashboardView(TemplateView):
    template_name = "dashboard/pages/index.html"

    def get_context_data(self, **kwargs):
        context = super(DashboardView, self).get_context_data(**kwargs)
        context["page_title"] = "Dashboard"
        return context


""" 
-------------------------------------------------------------------
                           ** Thread ***
-------------------------------------------------------------------
"""

def get_thread_common_contexts(request):
    common_contexts = get_simple_context_data(
        request=request, app_namespace=None, model_namespace="thread", model=Thread, list_template=None, fields_to_hide_in_table=[]
    )
    return common_contexts


@method_decorator(dashboard_decorators, name='dispatch')
class ThreadCreateView(CreateView):
    template_name = "dashboard/snippets/manage.html"
    form_class = ThreadManageForm

    def form_valid(self, form, **kwargs):
        title = form.instance.title
        field_qs = Thread.objects.filter(
            title__iexact=title
        )
        result = validate_normal_form(
            field='title', field_qs=field_qs,
            form=form, request=self.request
        )
        if result == 1:
            return super().form_valid(form)
        else:
            return super().form_invalid(form)

    def get_success_url(self):
        return reverse("create_thread")

    def get_context_data(self, **kwargs):
        context = super(
            ThreadCreateView, self
        ).get_context_data(**kwargs)
        context['page_title'] = 'Create Thread'
        context['page_short_title'] = 'Create Thread'
        for key, value in get_thread_common_contexts(request=self.request).items():
            print(key, value, "***")
            context[key] = value
        return context


@method_decorator(dashboard_decorators, name='dispatch')
class ThreadDetailView(DetailView):
    template_name = "dashboard/snippets/detail-common.html"

    def get_object(self):
        return get_simple_object(key='slug', model=Thread, self=self)

    def get_context_data(self, **kwargs):
        context = super(
            ThreadDetailView, self
        ).get_context_data(**kwargs)
        context['page_title'] = f'Thread - {self.get_object().title} Detail'
        context['page_short_title'] = f'Thread - {self.get_object().title} Detail'
        for key, value in get_thread_common_contexts(request=self.request).items():
            context[key] = value
        return context


@method_decorator(dashboard_decorators, name='dispatch')
class ThreadUpdateView(UpdateView):
    template_name = 'dashboard/snippets/manage.html'
    form_class = ThreadManageForm

    def get_object(self):
        return get_simple_object(key="slug", model=Thread, self=self)

    def get_success_url(self):
        return reverse("create_thread")

    def form_valid(self, form):
        self.object = self.get_object()
        title = form.instance.title
        if not self.object.title == title:
            field_qs = Thread.objects.filter(
                title__iexact=title
            )
            result = validate_normal_form(
                field='title', field_qs=field_qs,
                form=form, request=self.request
            )
            if result == 1:
                return super().form_valid(form)
            else:
                return super().form_invalid(form)

        messages.add_message(
            self.request, messages.SUCCESS, "Thread Updated Successfully!"
        )
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super(
            ThreadUpdateView, self
        ).get_context_data(**kwargs)
        context['page_title'] = f'Update Thread "{self.get_object().title}"'
        context['page_short_title'] = f'Update Thread "{self.get_object().title}"'
        for key, value in get_thread_common_contexts(request=self.request).items():
            context[key] = value
        return context


@csrf_exempt
@has_dashboard_permission_required
@login_required
def delete_thread(request):
    return delete_simple_object(request=request, key='slug', model=Thread, redirect_url="create_thread")
