import Tags from "./NotionComponents/tags";

export default function BlogTile({ article }) {
    const date = new Date(article.properties.date.date.start);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(date)

    return (
        <div className="flex flex-col justify-center items-left">
            <p className="text-sm font-semibold text-gray-500">{formattedDate}</p>
            <h1 className="font-semibold text-xl">{article.properties.title.title[0].plain_text}</h1>
            <p className="">{article.properties.summary.rich_text[0].text.content}</p>
            <Tags tags={article.properties.tags.multi_select} />
        </div>
    )
};