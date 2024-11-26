from django.shortcuts import render
from datetime import datetime

def login_view(request):
    return render(request, 'citas/login.html',{'timestamp': datetime.now().timestamp()})

def dashboard_view(request):
    return render(request, 'citas/dashboard.html',{'timestamp': datetime.now().timestamp()})

def accepted_view(request):
    return render(request, 'citas/accepted.html',{'timestamp': datetime.now().timestamp()})