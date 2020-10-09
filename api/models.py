from django.db import models
from django.contrib.auth.models import User

MEMBERSHIP_CHOICES =(
    ('Enterprise', 'ent'),
    ('Professional', 'pro'),
    ('Free', 'free')
)

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.owner.id, filename)

def company_directory_path(Company, filename):
    return '/company_images/{0}/{1}'.format(Company.name, filename)

# Create your models here.
class Membership(models.Model):
    pass

class UserMembership(models.Model):
    pass

class Company(models.Model):
    customLogo = models.ImageField(upload_to=company_directory_path, blank=True)
    name = models.CharField(max_length=150)
    welcomeMessage = models.TextField(blank=True, null=True)
    favicon = models.ImageField(upload_to=company_directory_path, blank=True)

class Course(models.Model):
    mainAuthor = models.ForeignKey(User, related_name='courses_author', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(max_length= 200, default=1, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(upload_to=user_directory_path, null=True, blank=True)
    students = models.ManyToManyField(User, related_name='courses_joined', blank=True)

    def __str__(self):
        return self.title
    

class Chapter(models.Model):
    course = models.ForeignKey(Course, related_name='chapters', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    position = models.SmallIntegerField(blank=True, null=True )   
    
class VideoItem(models.Model):
    title = models.CharField(max_length=250)
    video = models.FileField(upload_to=user_directory_path)
    chapter = models.ForeignKey(Chapter, related_name='videos', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length= 200, default=1, unique=True)
    owner = models.ForeignKey(User, related_name='videoitems_created', on_delete=models.CASCADE)

    def __str__(self):
        return self.title