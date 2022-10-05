import os
import pprint
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from notion_client import Client


@api_view(["GET"])
def getDatabase(request):
    notion = Client(auth=os.environ.get("NOTION_TOKEN"))
    notiondatabse = notion.databases.query(
        **{
            "database_id": os.environ.get("NOTION_DATABASE_ID"),
            "filter": {
                "and": [
                    {
                        "property": "status",
                        "select": {"equals": "Published"},
                    },
                    {
                        "property": "type",
                        "select": {"equals": "Post"},
                    },
                ]
            },
            "sorts": [
                {
                    "property": "date",
                    "direction": "descending",
                },
            ],
        }
    )
    return Response(
        data=notiondatabse,
        status=status.HTTP_200_OK,
        content_type="application/json",
    )


@api_view(["GET"])
def getPage(request, id):
    notion = Client(auth=os.environ.get("NOTION_TOKEN"))
    notionPage = notion.pages.retrieve(page_id=id)
    return Response(
        data=notionPage,
        status=status.HTTP_200_OK,
        content_type="application/json",
    )
