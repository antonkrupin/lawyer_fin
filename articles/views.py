from django.shortcuts import render
from django.core.paginator import EmptyPage, Paginator

from .models import Article

def index(request):
    articles = Article.objects.all()

    paginator = Paginator(articles, 2)
    page = request.GET.get('page')
    paged_articles = paginator.get_page(page)

    context = {
        'articles': paged_articles
    }
    return render(request,'articles/articles.html', context)

def article(request):
    return render(requers, 'articles/article.html')
