# Generated by Django 4.2.6 on 2024-01-19 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0021_alter_todo_upload'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='body',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='upload',
            field=models.ImageField(blank=True, default='Image.jpg', null=True, upload_to=''),
        ),
    ]
