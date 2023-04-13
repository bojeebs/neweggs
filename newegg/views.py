from django.shortcuts import render, redirect
from .serializers import CustomerSerializer, ProductSerializer
from django.views.generic import View
from .models import Customer, Product, ShoppingCart, Category
from rest_framework import generics
from django.http import JsonResponse





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




# class CartDetail(View):
#     def get(self, request, *args, **kwargs):
#         customer_id = kwargs.get('customer_id')
#         if customer_id:
#             try:
#                 customer = Customer.objects.get(id=customer_id)
#                 cart_items = ShoppingCart.objects.filter(customer=customer)
#                 total_price = sum(item.price for item in cart_items)
#                 data = {'cart_items': list(cart_items.values()), 'total_price': total_price}
#                 return JsonResponse(data)
#             except Customer.DoesNotExist:
#                 pass
        
#         data = {'cart_items': [], 'total_price': 0}
#         return JsonResponse(data)


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    
class CartRemove(View):
    def delete(self, request, product_id):
        ShoppingCart.objects.filter(id=product_id).delete()
        return redirect('cart_detail')


class CartAdd(View):
    def post(self, request, product_id):
        try:
            product = Product.objects.get(id=product_id)
            ShoppingCart.objects.create(product=product, price=product.product_price)
            return JsonResponse({'status': 'success'})
        except (Product.DoesNotExist):
            pass
        return JsonResponse({'status': 'error'})

    
class OrderDetailsView(View):
    def get(self, request, customer_id):
        
        cart = ShoppingCart.objects.filter(customer_id=customer_id)
        product_ids = [item.product.id for item in cart]
        price_total = sum([item.price for item in cart])
        data = {
            'product_ids': product_ids,
            'customer_id': customer_id,
            'price_total': price_total,
        }
        return JsonResponse(data)