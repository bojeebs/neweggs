# Generated by Django 4.2 on 2023-04-14 13:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('newegg', '0006_remove_customer_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='no name', max_length=100)),
                ('email', models.CharField(default='no email', max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='productcategory',
            name='category',
        ),
        migrations.RemoveField(
            model_name='productcategory',
            name='product',
        ),
        migrations.RemoveField(
            model_name='orderdetails',
            name='customer',
        ),
        migrations.RemoveField(
            model_name='shoppingcart',
            name='customer',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Customer',
        ),
        migrations.DeleteModel(
            name='ProductCategory',
        ),
        migrations.AddField(
            model_name='orderdetails',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customer_details', to='newegg.user'),
        ),
        migrations.AddField(
            model_name='shoppingcart',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='shopping_carts', to='newegg.user'),
        ),
    ]