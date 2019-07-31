from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import Paginator

from articles.models import Article
from diploms.models import Diplom

def index(request):
    return render(request, 'pages/index.html')

def about(request):
    return render(request, 'pages/about.html')

def services(request):
    articles = Article.objects.order_by('-article_date').filter(is_published=True)
    context = {
        'articles': articles
    }

    return render(request, 'pages/services.html', context)

def contacts(request):
    return render(request, 'pages/contacts.html')

def certificates(request):
    certificates = Diplom.objects.order_by('-id')
    context = {
        'certificates': certificates
    }
    return render(request, 'pages/certificates.html', context)
