from django.urls import path
from . import views



urlpatterns = [
     
     path('api/customer/create/', views.CreateCustomerView.as_view(), name='customer'),
     path('api/customer/login/', views.LoginView.as_view(), name='login'),
     path('product/', views.ProductList.as_view(), name='products'),
     # path('cart/<int:customer_id>/', views.CartDetail.as_view(), name='cart'),
     path('cart/remove/<int:product_id>/', views.CartRemove.as_view(), name='remove_cart'),
     path('cart/add/<int:product_id>/', views.CartAdd.as_view(), name='cart_add'),
     # path('order/create/', views.OrderCreate.as_view(), name='order_create'),
     path('order_details/<int:customer_id>/', views.OrderDetailsView.as_view(), name='order_details'),

]