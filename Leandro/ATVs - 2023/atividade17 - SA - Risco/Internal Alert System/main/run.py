# Importe o modelo e as configurações do Django
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main.settings')
django.setup()

from app.models import Planta,Local,Reports,Situacao,Risco,CustomUser

def adicionar_planta(nome, pais, estado, cidade):
    planta = Planta(nome_planta=nome, pais_planta=pais, estado_planta=estado,cidade_planta=cidade)
    planta.save()

def adicionar_local(nome, planta_id):
    planta = Planta.objects.get(id=planta_id)
    
    local = Local(nome_local=nome, planta=planta)
    local.save()

def adicionar_situacao(local_id,nome,descricao,vas):
    situacao=Situacao(local=Local.objects.get(id=local_id),nome_situacao=nome,descricao_situacao=descricao,verifica_area_situacao=vas)
    situacao.save()

def adicionar_risco(situacao_id,nome,descricao,var):
    risco=Risco(situacao=Situacao.objects.get(id=situacao_id),nome_risco=nome,descricao_risco=descricao,verifica_area_risco=var)
    risco.save()

CustomUser.objects.filter(edv=11111111).delete()