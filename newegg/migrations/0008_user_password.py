# Generated by Django 4.2 on 2023-04-14 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newegg', '0007_user_remove_productcategory_category_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='no name', max_length=20),
        ),
    ]