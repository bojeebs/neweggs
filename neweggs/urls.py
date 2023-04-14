from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('newegg.urls')),
    path('api/customer/login/', views.login_view, name='login'),
]

urlpatterns += staticfiles_urlpatterns()