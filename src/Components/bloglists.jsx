import { Suspense, useEffect, useState } from "react";
import useArticleStore from "./../store";
import BlogTile from "./blogtile";
import { Link } from 'react-router-dom';
import TileLoader from "./tileloader";

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
        <Suspense fallback={<TileLoader />}>
            <section className="mt-8 flex flex-col justify-center items-left px-6 mx-auto md:max-w-2xl md:px-0 lg:max-w-4xl">
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
        </Suspense>
    );
}
