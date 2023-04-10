from rest_framework import serializers
from .models import Customer, Product, ShoppingCart, Category, ProductCategory, OrderDetails
from django.contrib.auth.models import User

class UserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    customer = serializers.HyperlinkedRelatedField(
        view_name='customer_detail',
        read_only=True
    )

    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )

    class Meta:
        model = Customer
        fields = ('id', 'user_id', 'name', 'address', 'email', 'phone_number')

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'product_description', 'image_url')


class ShoppingCartSerializer(serializers.HyperlinkedModelSerializer):
    
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product'
    )
    customer_id = serializers.PrimaryKeyRelatedField(
        queryset=Customer.objects.all(),
        source='customer'
    )


    class Meta:
        model = ShoppingCart
        fields = ('id', 'customer', 'customer_id', 'product', 'product_id', 'price')


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['product', 'category']


class OrderDetailsSerializer(serializers.ModelSerializer):

     product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product'
    )
     customer_id = serializers.PrimaryKeyRelatedField(
        queryset=Customer.objects.all(),
        source='customer'
    )
     shopping_cart_id = serializers.PrimaryKeyRelatedField(
         queryset=ShoppingCart.objects.all(),
         source='shopping_cart'
     )
     class Meta:
        model = OrderDetails
        fields = ['product', 'product_id', 'customer', 'customer_id', 'shopping_cart_id', 'order_total']