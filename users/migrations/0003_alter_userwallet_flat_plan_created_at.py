# Generated by Django 3.2.6 on 2021-09-07 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_userwallet'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userwallet',
            name='flat_plan_created_at',
            field=models.DateTimeField(null=True),
        ),
    ]
