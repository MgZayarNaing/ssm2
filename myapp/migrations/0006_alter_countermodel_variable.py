# Generated by Django 4.2 on 2025-06-24 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_testimonialmodel_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='countermodel',
            name='variable',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]
