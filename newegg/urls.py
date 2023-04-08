from django.urls import path
from . import views
from .views import CreateUserView


urlpatterns = [
     path('home/', views.HomeView.as_view(), name ='home'),
     path('logout/', views.LogoutView.as_view(), name ='logout'),
     path('api/user/', views.UserView.as_view(), name='user'),
     path('create-user/', CreateUserView.as_view(), name='create_user'),
]