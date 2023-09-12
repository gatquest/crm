from django.shortcuts import render
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response

# Create your views here.

from .models import Sale
from rest_framework import permissions, viewsets, generics, status

from .serializers import SaleSerializer



class SaleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        request.data._mutable = True
        last_order = Sale.objects.all().order_by('-created_at').first()
        if(last_order.num_order):
            request.data.update(num_order=(last_order.num_order+1))
        else:
            request.data.update(num_order=100)
        request.data._mutable = False
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):

        serializer.save()



