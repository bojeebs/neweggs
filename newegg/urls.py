from django.urls import path
from . import views
from .views import CreateCustomerView



urlpatterns = [
     
     # path('customer/<int:pk>/', views.UserList.as_view(), name='customer_list'),
     path('api/customer/create/', CreateCustomerView.as_view(), name='customer'),
     path('product/', views.ProductList.as_view(), name='products'),
     path('api/customer/login/', views.LoginView, name='login'),
     # path('cart/<int:customer_id>/', views.CartDetail.as_view(), name='cart'),
     path('cart/remove/<int:product_id>/', views.CartRemove.as_view(), name='remove_cart'),
     path('cart/add/<int:product_id>/', views.CartAdd.as_view(), name='cart_add'),
     # path('order/create/', views.OrderCreate.as_view(), name='order_create'),
     path('order_details/<int:customer_id>/', views.OrderDetailsView.as_view(), name='order_details'),

]