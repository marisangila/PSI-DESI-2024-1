from django import forms
from .models import CostCenter, Device, DeviceStatus, Location, OrderStatus, Orders, Users

class CostCenterForm(forms.ModelForm):
    class Meta:
        model = CostCenter
        fields = ['cc_id', 'cc_number']
        
class DeviceForm(forms.ModelForm):
    class Meta:
        model = Device
        fields = ['device_id', 'device_name', 'device_serial_number', 'device_last_use', 'fk_ds']
        
class DeviceStatusForm(forms.ModelForm):
    class Meta:
        model = DeviceStatus
        fields = ['ds_id', 'ds_description']

class LocationForm(forms.ModelForm):
    class Meta:
        model = Location
        fields = ['location_id', 'location_plant']

class OrderStatusForm(forms.ModelForm):
    class Meta:
        model = OrderStatus
        fields = ['os_id', 'os_description']
    
class UsersForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ['user_id', 'user_edv', 'user_name', 'fk_location', 'fk_cc']

class OrdersForm(forms.ModelForm):
    user_edv = forms.ModelChoiceField(queryset=Users.objects.all(), required=True)
    device_serial_number = forms.ModelChoiceField(queryset=Device.objects.all(), required=True)
    os_description = forms.ModelChoiceField(queryset=OrderStatus.objects.all(), required=True)
    
    class Meta:
        model = Orders
        fields = [
            'order_retrieval_date',
            'order_delivery_date',
            'order_ticket_it',
            'order_ticket_user',
            'user_edv',
            'device_serial_number',
            'os_description'
        ]
        widgets = {
            'order_delivery_date': forms.TextInput(attrs={'type': 'date'}),
        }
    
    order_retrieval_date = forms.CharField(required=True)
    order_delivery_date = forms.CharField(required=True)
    order_ticket_it = forms.CharField(required=True)
    order_ticket_user = forms.CharField(required=True)