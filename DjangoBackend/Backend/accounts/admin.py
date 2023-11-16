from django.contrib import admin
from .models import Parent, Teacher, Class, Attendance, Performance,Child

all_models = [Parent, Teacher, Class, Attendance, Performance,Child]

# Register your models here.
admin.site.register(all_models)

