from django.contrib import admin

# Register your models here.
from .models import Project, Post

admin.site.register([Project, Post])