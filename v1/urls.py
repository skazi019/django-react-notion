from inspect import getblock
from pydoc import getpager
from django.urls import path
from .views import getDatabase, getPage, getBlocks

urlpatterns = [
    path(route="get-database/", view=getDatabase, name="get-database"),
    path(route="get-page/<str:slug>", view=getPage, name="get-page"),
    path(route="get-blocks/<str:id>", view=getBlocks, name="get-blocks"),
]
