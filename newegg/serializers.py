from rest_framework import serializers
from .models import Product, ShoppingCart, OrderDetails, User
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'password']
  
    def create(self, validated_data):
        user = User.objects.create(
            name=validated_data['name'],
            password=make_password(validated_data['password'])
        )
        user.save()
        return user



class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'product_description', 'image_url')


class ShoppingCartSerializer(serializers.HyperlinkedModelSerializer):
    
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product'
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    
    class Meta:
        model = ShoppingCart
        fields = ('id', 'customer', 'customer_id', 'product', 'product_id', 'price')


class OrderDetailsSerializer(serializers.ModelSerializer):

     product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product'
    )
     user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='customer'
    )
     shopping_cart_id = serializers.PrimaryKeyRelatedField(
         queryset=ShoppingCart.objects.all(),
         source='shopping_cart'
     )
     class Meta:
        model = OrderDetails
        fields = ['product', 'product_id', 'user', 'user_id' 'shopping_cart_id', 'order_total']