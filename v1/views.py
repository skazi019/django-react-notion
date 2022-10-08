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
    try:
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
    except Exception as e:
        return Response(
            data={
                "error": "could not call the API at this moment.",
            },
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
            content_type="application/json",
        )
    else:
        return Response(
            data=notiondatabse,
            status=status.HTTP_200_OK,
            content_type="application/json",
        )


@api_view(["GET"])
def getPage(request, id):
    notion = Client(auth=os.environ.get("NOTION_TOKEN"))
    try:
        notionPage = notion.pages.retrieve(page_id=id)
    except Exception as e:
        return Response(
            data={
                "error": "could not call the API at this moment.",
            },
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
            content_type="application/json",
        )
    else:
        return Response(
            data={
                "page_properties": notionPage,
            },
            status=status.HTTP_200_OK,
            content_type="application/json",
        )


@api_view(["GET"])
def getBlocks(request, id):
    notion = Client(auth=os.environ.get("NOTION_TOKEN"))
    cursor = None
    blocks: list = []
    keepLooping: bool = True

    try:
        while keepLooping:
            res = notion.blocks.children.list(
                **{
                    "block_id": id,
                    "start_cursor": cursor,
                }
            )
            result, next_cursor = res["results"], res["next_cursor"]
            blocks.extend(result)
            if not next_cursor:
                keepLooping = False
            else:
                cursor = next_cursor
        for index, block in enumerate(blocks):
            if block["has_children"]:
                res = notion.blocks.children.list(block_id=block["id"])
                block["children"] = res["results"]
                # blocks.insert(index+1, res["results"])
                # Extending the new list of block after the parent block in the blocks list
                # blocks[index+1:index+1] = res["results"]
    except Exception as e:
        return Response(
            data={
                "error": "could not call the API at this moment.",
            },
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
            content_type="application/json",
        )
    else:
        return Response(
            data={
                "page_contents": blocks,
            },
            status=status.HTTP_200_OK,
            content_type="application/json",
        )
