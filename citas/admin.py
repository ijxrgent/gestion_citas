from django.contrib import admin
from .models import CentroMedico, Seleccion, Cita

# Register your models here.
admin.site.register(CentroMedico)
admin.site.register(Seleccion)
admin.site.register(Cita)