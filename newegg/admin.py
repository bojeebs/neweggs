from django.contrib import admin
from .models import Product, ShoppingCart, OrderDetails

admin.site.register(Product)
admin.site.register(ShoppingCart)
admin.site.register(OrderDetails)