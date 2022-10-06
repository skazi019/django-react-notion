
export default function BlogTile({ article }) {
    return (
        <div className="mt-8">
            <h1 className="font-semibold text-xl">{article.properties.title.title[0].plain_text}</h1>
            <p className="mt-2">{article.properties.summary.rich_text[0].text.content}</p>
        </div>
    )
};