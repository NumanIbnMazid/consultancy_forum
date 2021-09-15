from django.views.generic import TemplateView
from users.models import Husband
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render

class HomeView(TemplateView):
    template_name = "user-panel/index.html"

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        context["page_title"] = "Home"
        return context


def create_husband(request):
    return render(request, 'user-panel/husband.html')