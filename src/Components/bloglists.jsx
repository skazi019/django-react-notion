import { Suspense, useEffect } from "react";
import useArticleStore, { useFilterStore } from "./../store";
import BlogTile from "./blogtile";
import { Link } from 'react-router-dom';
import TileLoader from "./tileloader";
import Filter from './filterSection';
import { containsObject, fetchAllArticles } from "./utilities";

export default function BlogList() {

    const { articles, setArticles } = useArticleStore(
        (state) => ({
            articles: state.articles,
            setArticles: state.setArticles,
        })
    )

    const { searchFilter, tagFilter } = useFilterStore(
        (state) => ({
            searchFilter: state.searchFilter,
            tagFilter: state.tagFilter,
        })
    )

    const applySearchFilter = (text) => {
        if (text === '') {
            return text
        } else {
            return text.toLowerCase().includes(searchFilter)
        }
    }

    function applyTagFilter(articleTags, tagFilterList) {
        if (tagFilterList.length < 1) {
            return true
        } else {
            let shouldFilter = []
            for (let i = 0; i < articleTags.length; i++) {
                if (containsObject(articleTags[i], tagFilterList)) {
                    shouldFilter.push(true);
                }
                else {
                    if (tagFilterList.length > 1) {
                        return false;
                    }
                    shouldFilter.push(false);
                }
            }
            return shouldFilter.includes(true) ? true : false
        }
    }


    useEffect(() => {
        fetchAllArticles(setArticles);
    }, [])

    return (
        <section className="mt-8 flex flex-col justify-center items-left px-6 sm:px-20 w-screen md:px-0 mx-auto md:w-lg md:max-w-2xl lg:w-xl lg:max-w-4xl">
            <Filter />
            {
                articles
                    .filter((article) => applySearchFilter(article.properties.slug.rich_text[0].plain_text))
                    .filter((article) => applyTagFilter(article.properties.tags.multi_select, tagFilter))
                    .map((article, i) => {
                        return (
                            <Suspense fallback={<TileLoader />}>
                                <Link key={i} to={article.properties.slug.rich_text[0].plain_text} className='my-4'>
                                    <BlogTile article={article} />
                                </Link>
                            </Suspense>
                        )
                    })
            }
        </section>
    );
}
