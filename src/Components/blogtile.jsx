import { useFilterStore } from "../store";
import { containsObject } from "./utilities";
import Tags from "./NotionComponents/tags";
import { getFormattedDate } from "./utilities";

export default function BlogTile({ article }) {
    const date = new Date(article.properties.date.date.start);
    const multiTags = article.properties.tags.multi_select;
    const formattedDate = getFormattedDate(date);

    const { allTags, setAllTags, tagFilter } = useFilterStore(
        (state) => ({
            allTags: state.allTags,
            setAllTags: state.setAllTags,
            tagFilter: state.tagFilter,
        })
    );

    const addTag = (Tags) => {
        Tags.map((tag, i) => {
            if (!containsObject(tag, allTags) && !containsObject(tag, tagFilter)) {
                setAllTags([...allTags, tag])
            }
            return true
        })
    };

    addTag(multiTags);

    return (
        <div className="flex flex-col justify-center items-left">
            <p className="text-sm font-hind font-semibold text-gray-500 dark:text-gray-400">{formattedDate}</p>
            <h1 className="font-hind font-semibold text-xl dark:text-white">{article.properties.title.title[0].plain_text}</h1>
            <p className="font-hind text-md">{article.properties.summary.rich_text[0].text.content}</p>
            <Tags tags={multiTags} extraClasses='mt-2' />
        </div>
    )
};