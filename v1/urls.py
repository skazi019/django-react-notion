from inspect import getblock
from pydoc import getpager
from django.urls import path, re_path
from .views import getDatabase, getPage, getBlocks, index

urlpatterns = [
    path(route="get-database/", view=getDatabase, name="get-database"),
    path(route="get-page/<str:slug>", view=getPage, name="get-page"),
    path(route="get-blocks/<str:id>", view=getBlocks, name="get-blocks"),
    # path(route="", view=index, name="index"),
    re_path(route=".*", view=index, name="index"),
]
