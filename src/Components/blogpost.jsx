import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useArticleStore from '../store';
import Post from './post';
import PostLoader from './postloader';


export default function BlogPost(props) {
    const data = useParams();
    document.title = data.slug;

    const [isLoading, setLoading] = useState(true);

    const { page, getPageFromSlug } = useArticleStore((state) => ({
        slugId: state.slugId,
        page: state.page,
        setPage: state.setPage,
        getPageFromSlug: state.getPageFromSlug,
    }));


    useEffect(() => {
        getPageFromSlug(data.slug);
        setLoading(false);
    }, [])


    return (
        <>
            {
                isLoading ?
                    <main>
                        <section className='max-w-2xl mx-auto my-20'>
                            <PostLoader />
                        </section>
                    </main>
                    :
                    <Post page={page} />
            }

        </>
    )
}