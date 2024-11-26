from django.urls import path
from django.shortcuts import redirect
from citas import views

urlpatterns = [
    path('', lambda request: redirect('login')),
    path('login/', views.login_view, name='login'),
    path('dashboard/', views.dashboard_view, name='dashboard'),
    path('accepted/', views.accepted_view, name='accepted'),
]
