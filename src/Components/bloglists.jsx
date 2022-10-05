import { useEffect } from "react";
import useArticleStore from "./../store";
import BlogTile from "./blogtile";
import { Link } from 'react-router-dom';

export default function BlogList() {

    const { articles, setArticles } = useArticleStore(
        (state) => ({
            articles: state.articles,
            setArticles: state.setArticles,
        })
    )

    function fetchArticles() {
        fetch(process.env.REACT_APP_BACKEND_URI + '/get-database/',
            {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                }
            }
        )
            .then(async (response) => {
                const res = await response.json();
                const result = res.results;
                setArticles(result)
            })
    }


    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <section className="mt-8 flex flex-col justify-center items-left max-w-3xl mx-auto">
            {
                articles.map((article, i) => {
                    return (
                        <Link key={i} to={article.properties.slug.rich_text[0].plain_text}>
                            <BlogTile article={article} />
                        </Link>
                    )
                })
            }
        </section>
    );
}
