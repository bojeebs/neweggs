from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer, CustomerSerializer, ProductSerializer
from .serializers import ShoppingCartSerializer, OrderDetailsSerializer, ProductCategorySerializer
from django.contrib.auth.models import User
from django.views.generic import View, DetailView
from .models import Customer, Product, ShoppingCart, Category, ProductCategory, OrderDetails
from rest_framework import generics



class HomeView(APIView):
     
   permission_classes = (IsAuthenticated, )
   def get(self, request):
       content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'},
       return Response(content)
   

class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
          
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)
          

class UserView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            access = refresh.access_token
            return Response({
                'refresh': str(refresh),
                'access': str(access),
            })
        else:
            return Response(serializer.errors, status=400)
        

class CreateUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password)
        return Response({'message': f'User {user.username} created successfully'}, status=status.HTTP_201_CREATED)
    

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CustomerList(generics.RetrieveAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CategoryList(View):
    def get(self, request):
        categories = Category.objects.all()
        context = {'categories': categories}
        return render(request, 'category_list.html', context)
    
class CartDetail(View):
    def get(self, request):
        cart_items = ShoppingCart.objects.filter(customer=request.user.customer)
        total_price = sum(item.price for item in cart_items)
        context = {'cart_items': cart_items, 'total_price': total_price}
        return render(request, 'cart_detail.html', context)

class CartRemove(View):
    def post(self, item_id):
        ShoppingCart.objects.filter(id=item_id).delete()
        return redirect('cart_detail')


class CartAdd(View):
    def post(self, request, product_id):
        product = Product.objects.get(id=product_id)
        ShoppingCart.objects.create(customer=request.user, product=product, price=product.price)
        return redirect('cart_detail')

class OrderDetailsView(DetailView):
    model = OrderDetails
    template_name = 'order_details.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        order_details = self.object
        context['shopping_cart'] = order_details.shopping_cart
        context['customer'] = order_details.customer
        context['order_total'] = order_details.order_total
        return context


class OrderCreate(View):
    def post(self, request):
        cart_items = ShoppingCart.objects.filter(customer=request.user)
        order_total = sum(item.price for item in cart_items)
        for item in cart_items:
            OrderDetails.objects.create(
                product=item.product,
                customer=request.user,
                shopping_cart=item,
                order_total=order_total
            )
        cart_items.delete()
        return redirect('order_success')