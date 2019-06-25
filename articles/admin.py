from django.contrib import admin

from .models import Article

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_published')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_per_page = 15

admin.site.register(Article, ArticleAdmin)
