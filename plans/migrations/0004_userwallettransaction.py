# Generated by Django 3.2.6 on 2021-09-09 08:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('plans', '0003_auto_20210907_0603'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserWalletTransaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True)),
                ('transaction_type', models.PositiveSmallIntegerField(choices=[(0, 'Point'), (1, 'Flat Rate')], default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('flat_rate_plan', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_wallet_transaction_flat_rate_plans', to='plans.flatrateplan')),
                ('point_plan', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_wallet_transaction_point_plans', to='plans.pointplan')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_wallet_transaction_users', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'UserWalletTransaction',
                'verbose_name_plural': 'UserWalletTransactions',
                'ordering': ['-created_at'],
            },
        ),
    ]
