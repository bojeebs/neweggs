from django.shortcuts import render, redirect
from .serializers import ProductSerializer, CustomerSerializer
from django.views.generic import View
from .models import  Product, ShoppingCart, Customer
from rest_framework import generics
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt

# @csrf_exempt
def login_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        password = request.POST.get('password')
        customer = authenticate(request, name=name, password=password)

class CreateCustomerView(generics.CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    
class CartRemove(View):
    def delete(self, request, product_id):
        ShoppingCart.objects.filter(id=product_id).delete()
        return redirect('cart_detail')


class CartAdd(View):
    authentication_classes = []
    permission_classes = []
    def post(self, request, product_id):
        try:
            product = Product.objects.get(id=product_id)
            ShoppingCart.objects.create(product=product, price=product.product_price)
            return JsonResponse({'status': 'success'})
        except Product.DoesNotExist:
            return JsonResponse({'status': 'error'})


# bypassing csrf token
# cart_add = csrf_exempt(CartAdd.as_view())
# time_tracker_detail = csrf_exempt(TimeTrackerDetail.as_view())

class OrderDetailsView(View):
    def get(self, request, customer_id):
        
        cart = ShoppingCart.objects.filter(customer_id=customer_id)
        product_ids = [item.product.id for item in cart]
        price_total = sum([item.price for item in cart])
        data = {
            'product_ids': product_ids,
            'price_total': price_total,
        }
        return JsonResponse(data)