# Generated by Django 2.0.6 on 2018-07-23 13:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0002_auto_20180720_2321'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notification',
            options={'ordering': ['-created_at']},
        ),
    ]
