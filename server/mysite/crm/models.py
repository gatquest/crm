import uuid
from django.contrib.auth.models import User, Group, Permission

from django.db import models

# Create your models here.


class Sale(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='Время создания')
    num_order = models.IntegerField(verbose_name='Номер заказа', unique=True, null=True, blank=True, default=None)
    client = models.CharField(max_length=10000, verbose_name='Данные клиента', blank=True, null=True, default='')
    brand = models.CharField(max_length=10000, verbose_name='Брэнд', blank=True, null=True, default='')
    type = models.CharField(max_length=10000, verbose_name='Тип одежды', blank=True, null=True, default='')
    size = models.CharField(max_length=10000, verbose_name='Размер', blank=True, null=True, default='')
    description = models.CharField(max_length=10000, verbose_name='Комментарий от клиента', blank=True, null=True, default='')
    comment = models.CharField(max_length=10000, verbose_name='Комментарий по закупке', blank=True, null=True, default='')
    image = models.ImageField(upload_to='product/', null=True, blank=True) # изображение товара
    # measurements = models.ImageField(upload_to=get_upload_path, null=True, blank=True) # изображение стельки\ замеров
    status_ch = models.CharField(max_length=10000, verbose_name='Статус Китай', blank=True, null=True, default='')
    status_rf = models.CharField(max_length=10000, verbose_name='Статус Россия', blank=True, null=True, default='')
    country = models.CharField(max_length=10000, verbose_name='Страна доставки', blank=True, null=True, default='')
    price_cl = models.CharField(max_length=10000, verbose_name='Цена розничная', blank=True, null=True, default='')
    price_fc = models.CharField(max_length=10000, verbose_name='Цена закупочная', blank=True, null=True, default='')
