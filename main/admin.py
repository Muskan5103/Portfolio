from django.contrib import admin
from .models import Project, Contact
from .models import Blog

admin.site.register(Project)
admin.site.register(Contact)

admin.site.register(Blog)   