from django.shortcuts import render
from django.views.generic import View, CreateView, UpdateView, DetailView
from django.http import JsonResponse
from .models import DashboardSetting, BBStranslation
from .forms import BBStranslationManageForm
from bbs.decorators import has_dashboard_permission_required
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse
from django.contrib import messages
from bbs.helpers import (
    validate_normal_form, get_simple_context_data, get_simple_object, delete_simple_object
)
from django.utils import timezone
import json



dashboard_decorators = [login_required, has_dashboard_permission_required]


@method_decorator(dashboard_decorators, name='dispatch')
class DashboardSettingView(View):

    def post(self, *args, **kwargs):

        if self.request.is_ajax and self.request.method == "POST":
            try:
                # Get Config Values
                dashboard_setting = json.loads(self.request.body).get("setting-object", None)
                """
                Example Request Body Object:
                "setting-object": {
                    key: "skin-config",
                    value: value
                }
                """
                # define available keys
                available_keys = ["skin-config", "menu-collapsed-config", "layout-width-config",
                                  "navbar-color-config", "navbar-type-config", "footer-type-config", "translation-config", "auto-translation-config"]

                # get setting key
                setting_key = dashboard_setting.get("key", [])

                if setting_key in available_keys:
                    # get setting value
                    setting_value = dashboard_setting.get("value", None)

                    # get all objects of DashboardSetting
                    dashboard_setting_qs = DashboardSetting.objects.all()

                    # check if dashboard setting object exists, if not then create a DashboardSetting object
                    if dashboard_setting_qs:
                        pass
                    else:
                        DashboardSetting.objects.create(
                            title="Dashboard"
                        )

                    # update dashboard setting based on setting key
                    if setting_key == "skin-config":
                        dashboard_setting_qs.update(
                            skin=setting_value, updated_at=timezone.now()
                        )
                    elif setting_key == "menu-collapsed-config":
                        dashboard_setting_qs.update(
                            menu_collapsed=setting_value, updated_at=timezone.now()
                        )
                    elif setting_key == "layout-width-config":
                        dashboard_setting_qs.update(
                            layout_width=setting_value, updated_at=timezone.now()
                        )
                    elif setting_key == "navbar-color-config":
                        dashboard_setting_qs.update(
                            navbar_color=setting_value, updated_at=timezone.now()
                        )
                    elif setting_key == "navbar-type-config":
                        dashboard_setting_qs.update(
                            navbar_type=setting_value, updated_at=timezone.now()
                        )
                    elif setting_key == "footer-type-config":
                        dashboard_setting_qs.update(
                            footer_type=setting_value, updated_at=timezone.now()
                        )
                    elif setting_key == "translation-config":
                        dashboard_setting_qs.update(
                            allow_translation=bool(setting_value), updated_at=timezone.now()
                        )
                    elif setting_key == "auto-translation-config":
                        dashboard_setting_qs.update(
                            allow_auto_translation=bool(setting_value), updated_at=timezone.now()
                        )
                    else:
                        dashboard_setting_qs.update(
                            title="Dashboard", updated_at=timezone.now()
                        )
                else:
                    raise ValueError(
                        f"Invalid key: {setting_key} given! Available keys are {available_keys}"
                    )
                return JsonResponse({"valid": True}, status=200)
            except Exception as E:
                return JsonResponse({"valid": False, "Exception": str(E)}, status=400)
        return JsonResponse({}, status=400)


""" 
-------------------------------------------------------------------
                           ** BBStranslation ***
-------------------------------------------------------------------
"""


def get_translation_common_contexts(request):
    common_contexts = get_simple_context_data(
        request=request, app_namespace="utils", model_namespace="translation", model=BBStranslation, list_template=None, fields_to_hide_in_table=["id", "slug"]
    )
    return common_contexts


@method_decorator(dashboard_decorators, name='dispatch')
class BBStranslationCreateView(CreateView):
    template_name = "dashboard/snippets/translation-manage.html"
    form_class = BBStranslationManageForm

    def form_valid(self, form, **kwargs):
        return super().form_valid(form)

    def get_success_url(self):
        messages.add_message(
            self.request, messages.SUCCESS, "Translation Created Successfully!"
        )
        return reverse("utils:create_translation")

    def get_context_data(self, **kwargs):
        context = super(
            BBStranslationCreateView, self
        ).get_context_data(**kwargs)
        context['page_title'] = 'Create Translation'
        context['page_short_title'] = 'Create Translation'
        for key, value in get_translation_common_contexts(request=self.request).items():
            context[key] = value
        return context


@method_decorator(dashboard_decorators, name='dispatch')
class BBStranslationDetailView(DetailView):
    template_name = "dashboard/snippets/detail-common.html"

    def get_object(self):
        return get_simple_object(key='slug', model=BBStranslation, self=self)

    def get_context_data(self, **kwargs):
        context = super(
            BBStranslationDetailView, self
        ).get_context_data(**kwargs)
        context['page_title'] = f'Translation Detail'
        context['page_short_title'] = f'Translation Detail'
        for key, value in get_translation_common_contexts(request=self.request).items():
            context[key] = value
        return context


@method_decorator(dashboard_decorators, name='dispatch')
class BBStranslationUpdateView(UpdateView):
    template_name = 'dashboard/snippets/manage.html'
    form_class = BBStranslationManageForm

    def get_object(self):
        return get_simple_object(key="slug", model=BBStranslation, self=self)

    def get_success_url(self):
        return reverse("utils:create_translation")

    def form_valid(self, form):
        messages.add_message(
            self.request, messages.SUCCESS, "Translation Updated Successfully!"
        )
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super(
            BBStranslationUpdateView, self
        ).get_context_data(**kwargs)
        context['page_title'] = f'Update Translation'
        context['page_short_title'] = f'Update Translation'
        for key, value in get_translation_common_contexts(request=self.request).items():
            context[key] = value
        return context


@csrf_exempt
@has_dashboard_permission_required
@login_required
def delete_translation(request):
    return delete_simple_object(request=request, key='slug', model=BBStranslation, redirect_url="utils:create_translation")

# ...............***............... JSON File Download ...............***...............


@login_required()
def json_file_export(request):
    translation_qs = BBStranslation.objects.all()
    translation_list = list(translation_qs.values())
    return JsonResponse(translation_list, safe=False)