from django.db import models

# Create your models here.
class Post(models.Model):
	title = models.CharField(max_length=255)
	header_image = models.models.ImageField(null=True, blank=True, upload_to="images/")
	title_tag = models.CharField(max_length=255)
	author = models.ForeignKey(User, on_delete=models.CASCADE)
	body = RichTextField(blank=True, null=True)
	post_date = models.DateField(auto_now_add=True)
	category = models.CharField(max_length=255,default='coding')