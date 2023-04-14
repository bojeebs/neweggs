from rest_framework import serializers
from .models import Product, ShoppingCart, OrderDetails, Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['name', 'password']
  
    def create(self, validated_data):
        customer = Customer.objects.create(
            name=validated_data['username'],
            password=validated_data['password'])
        
        customer.save()
        return customer



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
        fields = ['product', 'product_id', 'customer', 'customer_id,' 'shopping_cart_id', 'order_total']