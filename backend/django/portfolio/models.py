from django.db import models

class Project(models.Model):
    id = models.AutoField(unique=True, primary_key=True, auto_created=True)
    title = models.CharField(max_length=30)
    thumbnail = models.ImageField()
    description = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    project_members = models.SmallIntegerField()
    title = models.CharField(max_length=30)
    link = models.CharField(max_length=30)
    type = models.CharField(max_length=30)

    def __str__(self):
        return self.title + ' | ' + str(self.id)
    
class Post(models.Model):
    id = models.AutoField(unique=True, primary_key=True, auto_created=True)
    content = models.CharField(max_length=255)   
    files = models.FileField()   
    created_at = models.DateField()
    modified_at = models.DateField()
    
    def __str__(self):
        return self.name