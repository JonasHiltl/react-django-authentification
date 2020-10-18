from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Course, VideoItem
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('mainAuthor',  'title', 'description', 'slug', 'created', 'cover', 'students')

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoItem
        fields = ('title', 'video', 'chapter', 'created', 'slug', 'owner')