import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useArticleStore from '../store';

export default function BlogPost(props) {
    const data = useParams();

    const { slugId, getIdFromSlug } = useArticleStore((state) => ({
        slugId: state.slugId,
        getIdFromSlug: state.getIdFromSlug,
    }));

    function getPage() {
        const id = slugId.id;
        fetch(process.env.REACT_APP_BACKEND_URI + '/get-page/' + id,
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
                console.log(res)
            })
    }

    useEffect(() => {
        getIdFromSlug(data.slug);
        getPage()
    }, [])


    return (
        <section>
            Slug: {data.slug} <br />
            Id: {slugId.id}
        </section>
    );
}