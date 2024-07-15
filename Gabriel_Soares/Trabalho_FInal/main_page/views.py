from django.shortcuts import render, redirect, get_object_or_404
from .models import CostCenter, Device, DeviceStatus, Location, OrderStatus, Orders, Users
from .forms import CostCenterForm, DeviceForm, DeviceStatusForm, LocationForm, OrderStatusForm, OrdersForm, UsersForm
from django.contrib import auth, messages
from django.views import View

def list_registers(request):
    orders = Orders.objects.select_related('fk_user', 'fk_device', 'fk_order_status')
    busca = request.GET.get('search')
    if busca:
        orders = Orders.objects.filter(fk_user__user_name__icontains = busca)
    return render(request, 'registros/table.html', {'orders': orders})

def new_register(request):
    if request.method == 'POST':  
        form = OrdersForm(request.POST)
        if form.is_valid():  
            try:
                ordem = Orders(
                    fk_user=form.cleaned_data['user_edv'],
                    order_ticket_it=form.cleaned_data['order_ticket_it'],
                    order_ticket_user=form.cleaned_data['order_ticket_user'],
                    fk_device=form.cleaned_data['device_serial_number'],
                    order_retrieval_date=form.cleaned_data['order_retrieval_date'],
                    order_delivery_date=form.cleaned_data['order_delivery_date'],
                    fk_order_status=form.cleaned_data['os_description']
                )
                ordem.save() 
                return redirect('list_registers')
            except Exception as e:
                print(f"Erro ao salvar no banco de dados: {e}")  
        else:
            print("Formulário inválido") 
    else:
        print("Recebendo GET request")  
        form = OrdersForm()
    
    return render(request, 'registros/register.html', {'form': form})

def edit_register(request, pk):
    ordem = get_object_or_404(Orders, pk=pk)
    if request.method == 'POST':
        form = OrdersForm(request.POST, instance=ordem)
        if form.is_valid():
            form.save()
            return redirect('list_registers')
    else:
        form = OrdersForm(instance=ordem)
    return render(request, 'registros/edit.html', {'form': form})

def delete_register(request, pk):
    ordem = get_object_or_404(Orders, pk=pk)
    ordem.delete()
    return redirect('list_registers')