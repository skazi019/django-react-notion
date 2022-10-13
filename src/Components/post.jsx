import { Fragment, useEffect, useState } from "react";
import useArticleStore, { useFilterStore } from '../store';
import Text from "./NotionComponents/text";
import { renderBlock } from "./renderblock";
import PostLoader from "./postloader";
import Navbar from "./navbar";


export default function Post({ page }) {

    const [isLoading, setLoading] = useState(true);

    const { blocks, setBlocks } = useArticleStore((state) => ({
        blocks: state.blocks,
        setBlocks: state.setBlocks,
    }));

    const { setSearchFilter, setAllTags } = useFilterStore(
        (state) => ({
            setSearchFilter: state.setSearchFilter,
            setAllTags: state.setAllTags,
        })
    )

    function getBlocks(id) {
        fetch(process.env.REACT_APP_BACKEND_URI + '/get-blocks/' + id,
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
                setBlocks(res.page_contents)
                setLoading(false)
            })
    }

    useEffect(() => {
        getBlocks(page.id);

        return () => {
            setBlocks([]);
            setSearchFilter('');
            setAllTags([]);
            document.title = 'Kaushal Sharma Blog'
        }
    }, [])


    return (
        <>
            <Navbar />
            <main>
                <article className='my-20 px-6 md:px-0 mx-auto md:w-sm lg:w-md lg:max-w-4xl'>
                    <h1 className="text-4xl">
                        <Text text={page.properties.title.title} />
                    </h1>
                    {
                        !isLoading ?
                            (
                                <>
                                    <section className="mt-4">
                                        {blocks.map((block, key) => (
                                            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                                        ))}
                                    </section>
                                </>
                            )
                            :
                            (
                                <PostLoader />
                            )
                    }
                </article>
            </main>
        </>
    );
}
