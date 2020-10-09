from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Course, VideoItem
from .serializers import CourseSerializer, VideoSerializer


class CoursesListView(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CoursesDetailView(RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class VideoListView(ListAPIView):
    queryset = VideoItem.objects.all()
    serializer_class = VideoSerializer

class VideoDetailView(RetrieveAPIView):
    queryset = VideoItem.objects.all()
    serializer_class = VideoSerializer