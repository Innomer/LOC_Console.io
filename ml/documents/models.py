from django.db import models

# Create your models here.
class Documents(models.Model):
    hash=models.CharField(max_length=999)