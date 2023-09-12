from rest_framework import serializers
from .models import Sale

class SaleSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Sale
        fields = '__all__'
