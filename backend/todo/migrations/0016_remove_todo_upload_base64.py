# Generated by Django 4.2.6 on 2024-01-19 00:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0015_alter_todo_upload'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='upload_base64',
        ),
    ]
