from django.urls import path
from django.contrib import admin
from django.contrib.auth import logout
{% if cookiecutter.api == 'REST' %}
from django.conf.urls import include,  url

from config.api import api
{% elif cookiecutter.api == 'GraphQL' %}
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

from graphene_django.views import GraphQLView
{% endif %}


urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('logout/', logout, {'next_page': '/'}, name='logout'),
    {% if cookiecutter.api == 'REST' %}
    path('api/', include(api.urls)),
    url(r'^api_auth/', include('rest_auth.urls')),
    url(r'^api_auth/registration/', include('rest_auth.registration.urls'))
    {% elif cookiecutter.api == 'GraphQL' %}
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=settings.DEBUG))),
    {% endif %}
]
