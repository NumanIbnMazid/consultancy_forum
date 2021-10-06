from django.test import TestCase
from django.utils import timezone
import datetime

current_datetime = datetime.datetime.now()

future_datetime = datetime.datetime.strptime("2021-11-23 18:26:18", "%Y-%m-%d %H:%M:%S")

print((future_datetime - current_datetime).days > 30)

