from django.contrib import admin
from .models import  Company, Course, Chapter, VideoItem

# Register your models here.

admin.site.register(Company)

admin.site.register(Course)

admin.site.register(Chapter)

admin.site.register(VideoItem)