from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models
from rest_framework.response import Response

# Create your views here.
class TodoViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerialzier

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        
        if serializer.is_valid(raise_exception=True):
            self.perform_update(serializer)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

