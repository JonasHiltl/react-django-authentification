from django.urls import path, include

from .views import CoursesListView, CoursesDetailView, VideoListView, VideoDetailView

urlpatterns = [
    path('courses/', CoursesListView.as_view()),
    path('courses/<pk>', CoursesDetailView.as_view()),
    path('video/', VideoListView.as_view()),
    path('video/<pk>',VideoDetailView.as_view()),
]
