from django.views.generic import TemplateView
from django.shortcuts import render

class HomePageView(TemplateView):
    template_name = "en/index.html"


class AboutUsPageView(TemplateView):
    template_name = "en/about.html"

class ApplicationsPageView(TemplateView):
    template_name = "en/applications_before_lin.html"

class ResearchPageView(TemplateView):
    template_name = "en/research.html"

# 定义视图函数
def application_page1(request):
    return render(request, 'en/applications/application_page1.html', {'current_page': 'page1'})

def application_page2(request):
    return render(request, 'en/applications/application_page2.html', {'current_page': 'page2'})

def application_page3(request):
    return render(request, 'en/applications/application_page3.html', {'current_page': 'page3'})


