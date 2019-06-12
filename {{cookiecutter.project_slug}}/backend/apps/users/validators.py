from django.core.validators import RegexValidator
from django.utils.translation import gettext_lazy as _

phone_validator = [RegexValidator(r'^09\d{8}$', _(
    'The field must match 09XXXXXXXX pattern'), code='invalid_phone')]
