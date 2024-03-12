from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    preferences = models.CharField(max_length=100, null=True, blank=True)
