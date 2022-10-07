import { Fragment, useEffect, useState } from "react";
import useArticleStore from '../store';
import Text from "./NotionComponents/text";
import { renderBlock } from "./renderblock";
import PostLoader from "./postloader";


export default function Post({ page }) {

    const [isLoading, setLoading] = useState(true);

    const { blocks, setBlocks } = useArticleStore((state) => ({
        blocks: state.blocks,
        setBlocks: state.setBlocks,
    }));

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
            })
    }

    useEffect(() => {
        getBlocks(page.id);
        setLoading(false);
        return () => {
            setBlocks([]);
        }
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
                    <>
                        <main>
                            <article className='max-w-2xl mx-auto my-20'>
                                <h1 className="text-4xl">
                                    <Text text={page.properties.title.title} />
                                </h1>
                                <section className="mt-4">
                                    {blocks.map((block, key) => (
                                        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                                    ))}
                                </section>
                            </article>
                        </main>
                    </>
            }
        </>
    );
}
