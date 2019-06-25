from django.db import models
from datetime import datetime

class Article(models.Model):
    title = models.CharField(max_length=500)
    content = models.TextField()
    photo1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_published = models.BooleanField(default=True)
    article_date = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.title
