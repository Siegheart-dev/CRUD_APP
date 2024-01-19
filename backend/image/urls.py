from . import views
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('image', views.ImageViewSet, basename='image')

urlpatterns = [
]
urlpatterns += router.urls