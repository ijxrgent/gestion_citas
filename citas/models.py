# citas/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    pass

class CentroMedico(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField()
    direccion = models.TextField()
    telefono = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.nombre} - {self.correo}"

class Seleccion(models.Model):
    especialista = models.CharField(max_length=100)
    detalle = models.TextField()

    def __str__(self):
        return f"Especialista: {self.especialista} - {self.detalle}"

class Cita(models.Model):  # Si ya tienes un modelo para citas, amplíalo
    estado = models.CharField(max_length=20, default="Activa")

    def cancelar_cita(self):
        self.estado = "Cancelada"
        self.save()
        return "Cita cancelada"