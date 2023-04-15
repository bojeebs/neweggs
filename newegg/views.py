from django.shortcuts import render, redirect
from .serializers import ProductSerializer, UserSerializer
from django.views.generic import View
from .models import  Product, ShoppingCart, User
from rest_framework import generics
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView



class LoginView(APIView):
    # authentication_classes = []
    # permission_classes = []

    def post(self, request, format=None):
        username = request.data.get('username')
        password = request.POST.get('password')
        customer = get_object_or_404(User, username=username)

        if User.password == password:
            request.session['customer_id'] = customer.id
            return Response({'status': 'success'})
        else:
            return Response({'status': 'failure'})
        

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer




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
    def get(self, request, user_id):
        
        cart = ShoppingCart.objects.filter(user_id=user_id)
        product_ids = [item.product.id for item in cart]
        price_total = sum([item.price for item in cart])
        data = {
            'product_ids': product_ids,
            'price_total': price_total,
        }
        return JsonResponse(data)