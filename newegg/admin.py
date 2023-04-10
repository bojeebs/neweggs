from django.contrib import admin
from .models import Customer, Product, ShoppingCart, Category, ProductCategory, OrderDetails, User


admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(ShoppingCart)
admin.site.register(Category)
admin.site.register(ProductCategory)
admin.site.register(OrderDetails)