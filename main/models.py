from django.db import models

class Project(models.Model):

    title = models.CharField(max_length=100)

    description = models.TextField()

    image = models.ImageField(upload_to='projects/')

    github_link = models.URLField()

    demo_link = models.URLField()

    def __str__(self):
        return self.title
    


class Contact(models.Model):

    name = models.CharField(max_length=100)

    email = models.EmailField()

    subject = models.CharField(max_length=200)

    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='projects/')
    short_description = models.CharField(max_length=300)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

    