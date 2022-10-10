import { useEffect } from "react";
import { useFilterStore } from "../store";
import Tags from "./NotionComponents/tags";

export default function BlogTile({ article }) {
    const date = new Date(article.properties.date.date.start);
    const multiTags = article.properties.tags.multi_select
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(date)

    const { allTags, addTagToAllTags } = useFilterStore(
        (state) => ({
            allTags: state.allTags,
            addTagToAllTags: state.addTagToAllTags,
        })
    );

    const containsObject = (obj, list) => {
        console.log(`${obj.name} in question`)
        console.log('list is')
        console.log(list)
        for (let item in list) {
            if (item.name === obj.name) {
                return true;
            }
        }
        return false;
    }

    const addTag = (Tags) => {
        Tags.map((tag, i) => {
            if (!containsObject(tag, allTags)) {
                addTagToAllTags(tag);
            }
        })
    }

    useEffect(() => {
        addTag(multiTags);
    }, [])


    return (
        <div className="flex flex-col justify-center items-left">
            <p className="text-sm font-semibold text-gray-500">{formattedDate}</p>
            <h1 className="font-semibold text-xl">{article.properties.title.title[0].plain_text}</h1>
            <p className="">{article.properties.summary.rich_text[0].text.content}</p>
            <Tags tags={multiTags} />
        </div>
    )
};