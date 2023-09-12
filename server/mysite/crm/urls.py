from rest_framework import routers
from .views import SaleViewSet
from django.urls import path, include

app_name = 'sales'


router = routers.DefaultRouter()
router.register(r'sales', SaleViewSet)



urlpatterns = [
    path('list/', SaleViewSet.as_view({'get': 'list', 'post': 'create'}), name='subject_list'),
]