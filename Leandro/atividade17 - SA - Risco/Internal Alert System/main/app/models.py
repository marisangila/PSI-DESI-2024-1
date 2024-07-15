from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    edv = models.CharField(max_length=8, unique=True)
    last_name = models.CharField(max_length=15)
    
    def __str__(self):
        return self.username    

class Reports(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    planta_reports = models.CharField(max_length=100)
    local_reports = models.CharField(max_length=100)
    situacao_reports = models.CharField(max_length=255)
    risco_identificado_reports = models.CharField(max_length=255)
    houve_vitimas_reports = models.CharField(default='Não', max_length=4)
    nivel_danos_reports = models.CharField(max_length=50,null=True)
    area_responsavel_reports = models.CharField(max_length=10)
    descricao_reports = models.TextField(blank=True, null=True)
    
class Planta(models.Model):
    nome_planta=models.CharField(max_length=100)
    pais_planta=models.CharField(max_length=100)
    estado_planta=models.CharField(max_length=100)
    cidade_planta=models.CharField(max_length=100)
    
class Local(models.Model):
    planta=models.ForeignKey(Planta,on_delete=models.CASCADE)
    nome_local=models.CharField(max_length=100)
    interno_exerno_local=models.CharField(max_length=100)
    
class Situacao(models.Model):
    local=models.ForeignKey(Local,on_delete=models.CASCADE)
    nome_situacao=models.CharField(max_length=100)
    descricao_situacao=models.CharField(max_length=255)
    verifica_area_situacao=models.IntegerField()

class Risco(models.Model):
    situacao=models.ForeignKey(Situacao,on_delete=models.CASCADE)
    nome_risco=models.CharField(max_length=100)
    descricao_risco=models.CharField(max_length=255)
    verifica_area_risco=models.IntegerField()
    
    
