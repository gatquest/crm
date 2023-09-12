from django.forms import forms

from .models import Sale

class SaleEditForm(forms.ModelForm):
    class Meta:
        model = Sale
        fields = ['brand', 'image']
