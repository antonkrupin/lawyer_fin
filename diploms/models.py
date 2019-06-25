from django.db import models

class Diplom(models.Model):
    title = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    def __str__(self):
        return self.title
