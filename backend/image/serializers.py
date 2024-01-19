from rest_framework import serializers
from . import models

class ImageSerialzier(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = '__all__'
        read_only_fields = ['id', 'created']
        extra_kwargs = {
            'body': {'required': False},
            'upload': {'required': False},
        }