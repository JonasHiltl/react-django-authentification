from rest_framework import serializers

from .models import Course, VideoItem

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('mainAuthor',  'title', 'description', 'slug', 'created', 'cover', 'students')

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoItem
        fields = ('title', 'video', 'chapter', 'created', 'slug', 'owner')