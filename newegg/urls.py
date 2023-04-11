from django.urls import path
from . import views
from .views import CreateUserView


urlpatterns = [
     path('home/', views.HomeView.as_view(), name ='home'),
     path('logout/', views.LogoutView.as_view(), name ='logout'),
     path('customer/<int:pk>/', views.CustomerList.as_view(), name='customer_list'),
     path('product/<int:pk>/', views.ProductList.as_view(), name='products'),
     path('api/user/', views.UserView.as_view(), name='user'),
     path('create-user/', views.CreateUserView.as_view(), name='create_user'),
     path('cart/<int:customer_id>/', views.CartDetail.as_view(), name='cart'),
     path('cart/destroy/<int:product_id>/', views.CartRemove.as_view(), name='destroy_cart'),
     path('cart/add/<int:product_id>/', views.CartAdd.as_view(), name='cart_add'),
     path('order/create/', views.OrderCreate.as_view(), name='order_create'),
     path('order/<int:pk>/', views.OrderDetailsView.as_view(), name='order_details'),
]