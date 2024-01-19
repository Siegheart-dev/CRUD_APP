from django.db import models
from django.utils.safestring import mark_safe
import base64

# Create your models here.
class Image(models.Model):
    body = models.CharField(max_length=300, null=True, blank=True)
    completed = models.BooleanField(default = False)
    updated = models.DateTimeField(auto_now=True)
    created =  models.DateTimeField(auto_now_add=True)
    upload = models.ImageField(upload_to='', default='default', null=True, blank=True)


    def __str__(self):
        return self.body
    