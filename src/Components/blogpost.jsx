import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useArticleStore from '../store';
import Post from './post';
import PostLoader from './postloader';


export default function BlogPost(props) {
    const data = useParams();
    document.title = data.slug;

    const [isLoading, setLoading] = useState(true);

    const { articles, page, setPage, getPageFromSlug } = useArticleStore((state) => ({
        articles: state.articles,
        page: state.page,
        setPage: state.setPage,
        getPageFromSlug: state.getPageFromSlug,
    }));

    async function fetchPage() {
        if (articles.length < 1) {
            console.log('Making page request')
            await fetch(process.env.REACT_APP_BACKEND_URI + '/get-page/' + data.slug,
                {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                    }
                }
            ).then(async (response) => {
                const res = await response.json();
                const result = res.page_properties;
                setPage(result)
                setLoading(false)
            })
        } else {
            getPageFromSlug(data.slug)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPage();
    }, [])


    return (
        <>
            {
                isLoading ?
                    <main>
                        <section className='transition my-20 px-6 md:px-0 mx-auto md:w-sm lg:w-md lg:max-w-4xl'>
                            <PostLoader />
                        </section>
                    </main>
                    :
                    <Post page={page} />
            }

        </>
    )
}