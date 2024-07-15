from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_registers, name='list_registers'),
    path('registros/', views.list_registers, name='list_registers'),  # URL para listar veiculos
    path('new/', views.new_register, name='new_register'),
    path('edit/<int:pk>/', views.edit_register, name='edit_register'),
    path('delete/<int:pk>/', views.delete_register, name='delete_register'),
]