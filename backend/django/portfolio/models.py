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
    skills = models.CharField(max_length=50)
    
    CHOICES = [
        ('sideproject', '사이드 프로젝트'),
        ('workproject', '회사 프로젝트')
    ]
    
    type = models.CharField(max_length=50, choices=CHOICES, default="sideproject")

    def __str__(self):
        return self.title + ' | ' + str(self.id)
    
class Post(models.Model):
    id = models.AutoField(unique=True, primary_key=True, auto_created=True)
    title = models.CharField(max_length=100, default="")
    content = models.CharField(max_length=255)   
    files = models.FileField()   
    created_at = models.DateField()
    modified_at = models.DateField()
    
    def __str__(self):
        return self.title
    
class Guestbook(models.Model):
    id = models.AutoField(unique=True, primary_key=True, auto_created=True)
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    text= models.CharField(max_length=50)
    
    CHOICES = [
        ('#d1e8f2','하늘'), 
        ('#fdcc84','주황' ), 
        ('#feebda', '노랑'), 
        ('#fee6e6', '핑크'),
        ('#e7f1f2', '초록')
    ]
    
    color = models.CharField(max_length=7, choices=CHOICES, default='#d1e8f2')
    
    def __str__(self):
        return self.title + '|' + str(self.id)