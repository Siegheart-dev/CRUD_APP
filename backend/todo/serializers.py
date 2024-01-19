from rest_framework import serializers
from . import models

class TodoSerialzier(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = '__all__'
        read_only_fields = ['id', 'created']
        extra_kwargs = {
            'body': {'required': False},
            'upload': {'required': False},
        }