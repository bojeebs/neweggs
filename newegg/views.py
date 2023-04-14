from django.shortcuts import render, redirect
from .serializers import UserSerializer, ProductSerializer
from django.views.generic import View
from .models import  Product, ShoppingCart, User
from rest_framework import generics
from django.http import JsonResponse
from django.contrib.auth import authenticate, login


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'success'})




class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class UserList(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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