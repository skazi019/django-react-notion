from pydoc import getpager
from django.urls import path
from .views import getDatabase, getPage

urlpatterns = [
    path(route="get-database/", view=getDatabase, name="get-database"),
    path(route="get-page/<str:id>", view=getPage, name="get-page"),
]
