from django.db import models
from django.contrib.auth.models import User

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100, default='no name')
    address = models.CharField(max_length=100, default='no address')
    email = models.CharField(max_length=100, default='no email')
    phone_number = models.CharField(max_length=20, default='no phonenumber')

    def __str__(self):
        return self.name

class Product(models.Model):
    product_name = models.CharField(max_length = 100, default = 'no product name')
    product_description = models.CharField(max_length = 100, default = 'no description')
    product_price = models.DecimalField(max_digits = 8, decimal_places = 2, default = 0)
    image_url = models.TextField(default='default_image_url')

    def __str__(self):
        return self.product_name
    

class ShoppingCart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='shopping_carts', null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='shopping_carts')
    price = models.DecimalField(max_digits=8, decimal_places= 2, default=0)

    def __str__(self):
        return self.user


class Category(models.Model):
    category_name = models.CharField(max_length=100, default='no category name')
    image_url = image_url = models.TextField(default='default_image_url')

    def __str__(self):
        return self.category_name
    

class ProductCategory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_categories')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='product_categories')

    def __str__(self):
        return f'{self.product} - {self.category}'
    
class OrderDetails(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_details')
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_details')
    shopping_cart = models.ForeignKey(ShoppingCart, on_delete=models.CASCADE, related_name='order_details', null=True)
    order_total = models.DecimalField(max_digits = 8, decimal_places = 2, default = 0)


    def __str__(self):
        return f'Order {self.id} - {self.customer}'
