from django.contrib.auth.models import User
from django.db import models

class Parent(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    telephone_number = models.CharField(max_length=15)
    parent_name = models.CharField(max_length=255)
    child_first_name = models.CharField(max_length=255)
    child_last_name = models.CharField(max_length=255)
    child_gender = models.CharField(max_length=255, choices=[('M', 'Male'), ('F', 'Female')])
    child_classroom = models.CharField(max_length=20)
    profile_picture = models.ImageField(upload_to='profile_pictures',null=True, blank=True)

class Class(models.Model):
    name = models.CharField(max_length=50)

class Child(models.Model):
    parent = models.ForeignKey(Parent, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=255, choices=[('M', 'Male'), ('F', 'Female')])
    profile_picture = models.ImageField(upload_to='profile_pictures', blank=True)
    practice_area = models.CharField(max_length=50)
    

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    teaching_class = models.ForeignKey(Class, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profile_pictures', blank=True)
    is_parent = models.BooleanField(default=False)
    

class Attendance(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE)
    date = models.DateField()
    is_present = models.BooleanField(default=False)


class Performance(models.Model):
    child = models.OneToOneField(Child, on_delete=models.CASCADE)
    progress = models.TextField()
    total_performance = models.CharField(max_length=50)
