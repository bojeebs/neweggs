from django.contrib import admin
from .models import Customer, Product, ShoppingCart, Category, ProductCategory, OrderDetails, User

class CustomerAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class OrderDetailsAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class ProductAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class ShoppingCartAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

class CategoryAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(ShoppingCart)
admin.site.register(Category)
admin.site.register(ProductCategory)
admin.site.register(OrderDetails)