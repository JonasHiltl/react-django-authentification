from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.translation import ugettext_lazy as _

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

class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

class User(AbstractUser):
    """User model."""
    username = None
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    objects = UserManager()

class Company(models.Model):
    customLogo = models.ImageField(upload_to=company_directory_path, blank=True)
    owner = models.OneToOneField(User, related_name="company_owner", on_delete=models.CASCADE, default="Jonas")
    name = models.CharField(max_length=150)
    welcomeMessage = models.TextField(blank=True, null=True)
    favicon = models.ImageField(upload_to=company_directory_path, blank=True)

class GroupsEmployees(models.Model):
    pass

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