from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

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


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password, name, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name
    
    def get_short_name(self):
        return self.name
    
    def __str__(self):
        return self.email

class Company(models.Model):
    customLogo = models.ImageField(upload_to=company_directory_path, blank=True)
    owner = models.OneToOneField(UserAccount, related_name="company_owner", on_delete=models.CASCADE, default="Jonas")
    name = models.CharField(max_length=150)
    welcomeMessage = models.TextField(blank=True, null=True)
    favicon = models.ImageField(upload_to=company_directory_path, blank=True)

class GroupsEmployees(models.Model):
    pass

class Course(models.Model):
    mainAuthor = models.ForeignKey(UserAccount, related_name='courses_author', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(max_length= 200, default=1, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(upload_to=user_directory_path, null=True, blank=True)
    students = models.ManyToManyField(UserAccount, related_name='courses_joined', blank=True)

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
    owner = models.ForeignKey(UserAccount, related_name='videoitems_created', on_delete=models.CASCADE)

    def __str__(self):
        return self.title