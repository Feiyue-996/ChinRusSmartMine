from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

##############################
## Get all Visions
##############################
from .views import HomePageView, AboutUsPageView, ApplicationsPageView, ResearchPageView
from . import views
##############################
## Navigation
##############################
urlpatterns = [
	path('', HomePageView.as_view(), name="index_en"), # HomePage-View
	path('about-us/', AboutUsPageView.as_view(), name="about_en"), # About-US
	path('applications/', ApplicationsPageView.as_view(), name="applications_en"), # Applications-Before-login
	path('research/', ResearchPageView.as_view(), name="research_en"), # Research

	# 新的路由规则
    path('applications/application_page1.html/', views.application_page1, name='application_page1'),
    path('applications/application_page2.html/', views.application_page2, name='application_page2'),
]
