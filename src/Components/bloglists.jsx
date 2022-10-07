import { useEffect, useState } from "react";
import useArticleStore from "./../store";
import BlogTile from "./blogtile";
import { Link } from 'react-router-dom';
import TileLoader from "./tileloader";

export default function BlogList() {
    const [isLoading, setLoading] = useState(true);

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
                setLoading(false)
            })
    }


    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <>
            {
                !isLoading ? (
                    <section className="mt-8 flex flex-col justify-center items-left max-w-3xl mx-auto">
                        {
                            articles.map((article, i) => {
                                return (
                                    <Link key={i} to={article.properties.slug.rich_text[0].plain_text} className='my-4'>
                                        <BlogTile article={article} />
                                    </Link>
                                )
                            })
                        }
                    </section>
                ) : (
                    <section className="mt-8 flex flex-col justify-center items-left max-w-3xl mx-auto">
                        <TileLoader />
                        <TileLoader />
                        <TileLoader />
                    </section>
                )
            }
        </>


    );
}
