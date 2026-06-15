from django.shortcuts import render, redirect
from .models import Project, Contact
from django.contrib import messages

from django.shortcuts import render, redirect
from django.contrib import messages

from .models import Project, Contact, Blog
from django.core.mail import EmailMessage, send_mail
from django.conf import settings


def home(request):

    projects = Project.objects.all()
    blogs = Blog.objects.all().order_by('-created_at')

    if request.method == "POST":

        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        Contact.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )
        print("EMAIL USER:", settings.EMAIL_HOST_USER)
        print("PASSWORD EXISTS:", bool(settings.EMAIL_HOST_PASSWORD))
        email_message = EmailMessage(
            subject=f"New Portfolio Inquiry from {name}",
            body=f"""
New Contact Form Submission

Name: {name}
Email: {email}

Message:
{message}
""",
            from_email=settings.EMAIL_HOST_USER,
            to=[settings.EMAIL_HOST_USER],
            reply_to=[email]
        )

        email_message.send()

        messages.success(request, "Message Sent Successfully!")

        return redirect('/')

    context = {
        'projects': projects,
        'blogs': blogs,
    }

    return render(request, 'index.html', context)


def blog_detail(request, slug):

    blog = Blog.objects.get(slug=slug)

    return render(request, 'blog_detail.html', {
        'blog': blog
    })