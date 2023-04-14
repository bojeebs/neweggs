from django.contrib import admin
from .models import Product, ShoppingCart, OrderDetails, Customer

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(ShoppingCart)
admin.site.register(OrderDetails)