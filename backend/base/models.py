import os
import random
from django.db import models
from django.conf import settings


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext

def upload_image_path(instance, filename):
    new_filename = random.randint(1, 3910209312)
    name, ext = get_filename_ext(filename)
    final_filename = f"{new_filename}{ext}"
    return f"img/{new_filename}/{final_filename}"

#
class Product(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to=upload_image_path, null=True, blank=True)
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(default=0)

    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = models.IntegerField(default=0)

    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
