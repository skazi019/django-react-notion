import { Suspense, useEffect, useState } from "react";
import useArticleStore, { useFilterStore } from "./../store";
import BlogTile from "./blogtile";
import { Link } from 'react-router-dom';
import TileLoader from "./tileloader";
import Filter from './filterSection';

export default function BlogList() {

    const { articles, setArticles } = useArticleStore(
        (state) => ({
            articles: state.articles,
            setArticles: state.setArticles,
        })
    )

    const { searchFilter, setAllTags, tagFilter } = useFilterStore(
        (state) => ({
            searchFilter: state.searchFilter,
            setAllTags: state.setAllTags,
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


    const [localTagList, updateLocalTagList] = useState([]);

    const containsObject = (obj, list) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].name === obj.name) {
                return true;
            }
        }
        return false;
    }

    const addTag = (Tags) => {
        Tags.map((tag, i) => {
            if (!containsObject(tag, localTagList)) {
                updateLocalTagList(localTagList.push(tag))
            }
        })
    }

    function iterateOverArticles(allArticles) {
        allArticles.map((article, i) => {
            addTag(article.properties.tags.multi_select)
        })
    }

    function applyTagFilter(articleTags, tagFilterList) {
        if (tagFilterList.length < 1) {
            return true
        } else {
            let shouldFilter = []
            for (let i = 0; i < articleTags.length; i++) {
                if (containsObject(articleTags[i], tagFilterList)) {
                    shouldFilter.push(true);
                } else {
                    shouldFilter.push(false);
                }
            }
            return shouldFilter.includes(true) ? true : false
        }
    }

    useEffect(() => {
        fetchArticles();
        iterateOverArticles(articles);
        setAllTags(localTagList);
    }, [])

    return (
        <Suspense fallback={<TileLoader />}>
            <section className="mt-8 flex flex-col justify-center items-left px-6 mx-auto md:max-w-2xl md:px-0 lg:max-w-4xl">
                <Filter />
                {
                    articles
                        .filter((article) => applySearchFilter(article.properties.slug.rich_text[0].plain_text))
                        .filter((article) => applyTagFilter(article.properties.tags.multi_select, tagFilter))
                        .map((article, i) => {
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
