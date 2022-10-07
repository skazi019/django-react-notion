import { Fragment, useEffect, useState } from "react";
import useArticleStore from '../store';
import styles from "../post.module.css";
import { TailSpin } from 'react-loader-spinner';
import Text from "./NotionComponents/text";
import { renderBlock } from "./renderblock";


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
                    <>
                        <main>
                            <article className={styles.container}>
                                <h1 className="text-4xl">
                                    <Text text={page.properties.title.title} />
                                </h1>
                                <section>
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
