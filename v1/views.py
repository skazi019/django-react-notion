import os
import requests
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from notion_client import Client


notion = Client(auth=os.environ.get("NOTION_TOKEN"))

@api_view(["GET"])
def getDatabase(request):
    global notion
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
def getPage(request, slug):
    global notion
    try:
        allArticles = requests.get(
            url=os.path.join(os.environ["REACT_APP_BACKEND_URI"], "get-database"),
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        ).json()
        allArticles = allArticles["results"]
        for page in allArticles:
            if page["properties"]["slug"]["rich_text"][0]["plain_text"] == slug:
                notionPage = notion.pages.retrieve(page_id=page["id"])
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


def getChildBlock(notion: Client, id: str):
    cursor = None
    blocks: list = []
    keepLooping: bool = True

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
    return blocks


def hasChildren(parentBlock: any, notion: Client):
    masterBlock = parentBlock.copy()
    if not masterBlock["has_children"]:
        return masterBlock
    else:
        masterBlock["children"] = getChildBlock(notion=notion, id=masterBlock["id"])
        for index, child in enumerate(masterBlock["children"]):
            masterBlock["children"][index] = hasChildren(
                parentBlock=child, notion=notion
            )
    return masterBlock


@api_view(["GET"])
def getBlocks(request, id):
    try:
        blocks = getChildBlock(notion=notion, id=id)
        for index, block in enumerate(blocks):
            if block["has_children"]:
                blocks[index] = hasChildren(parentBlock=block, notion=notion)
    except Exception as e:
        print(f"Error occured: {e}")
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
