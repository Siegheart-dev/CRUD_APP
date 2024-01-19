# Generated by Django 4.2.6 on 2024-01-18 22:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0008_alter_todo_upload'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='item_image_url',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
