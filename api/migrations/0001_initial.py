# Generated by Django 2.2 on 2020-10-17 17:10

import api.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Chapter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('position', models.SmallIntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='GroupsEmployees',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='VideoItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('video', models.FileField(upload_to=api.models.user_directory_path)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(default=1, max_length=200, unique=True)),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='api.Chapter')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videoitems_created', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, null=True)),
                ('slug', models.SlugField(default=1, max_length=200, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('cover', models.ImageField(blank=True, null=True, upload_to=api.models.user_directory_path)),
                ('mainAuthor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='courses_author', to=settings.AUTH_USER_MODEL)),
                ('students', models.ManyToManyField(blank=True, related_name='courses_joined', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customLogo', models.ImageField(blank=True, upload_to=api.models.company_directory_path)),
                ('name', models.CharField(max_length=150)),
                ('welcomeMessage', models.TextField(blank=True, null=True)),
                ('favicon', models.ImageField(blank=True, upload_to=api.models.company_directory_path)),
                ('owner', models.OneToOneField(default='Jonas', on_delete=django.db.models.deletion.CASCADE, related_name='company_owner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='chapter',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chapters', to='api.Course'),
        ),
    ]
