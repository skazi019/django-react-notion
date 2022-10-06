import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useArticleStore from '../store';
import { TailSpin } from 'react-loader-spinner';
import Post from './post';


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
                    <TailSpin
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /> :
                    <Post page={page} />
            }

        </>
    )
}