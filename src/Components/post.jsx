import { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import useArticleStore from '../store';
import styles from "../post.module.css";
import { TailSpin } from 'react-loader-spinner';
import Text from "./NotionComponents/text";
import Paragraph from './NotionComponents/pararaph';
import Heading from './NotionComponents/heading';
import List from "./NotionComponents/lists";
import Quote from "./NotionComponents/quote";
import Code from "./NotionComponents/code";


const renderNestedList = (block) => {
    const { type } = block;
    const value = block[type];
    if (!value) return null;

    const isNumberedList = value.children[0].type === 'numbered_list_item'

    if (isNumberedList) {
        return (
            <ol>
                {value.children.map((block) => renderBlock(block))}
            </ol>
        )
    }
    return (
        <ul>
            {value.children.map((block) => renderBlock(block))}
        </ul>
    )
}

const renderBlock = (block) => {
    const { type, id } = block;
    const value = block[type];
    console.log(type)

    switch (type) {
        case "paragraph":
            return <Paragraph text={value.rich_text} />
        case "heading_1":
        case "heading_2":
        case "heading_3":
            return <Heading text={value.rich_text} type={type} />
        case "bulleted_list_item":
        case "numbered_list_item":
            // return (
            //     <li>
            //         <Text text={value.rich_text} />
            //         {!!value.children && renderNestedList(block)}
            //     </li>
            // );
            return <List text={value.rich_text} type={type} />
        case "to_do":
            return (
                <div>
                    <label htmlFor={id}>
                        <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
                        <Text text={value.rich_text} />
                    </label>
                </div>
            );
        case "toggle":
            return (
                <details>
                    <summary>
                        <Text text={value.rich_text} />
                    </summary>
                    {value.children?.map((block) => (
                        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                    ))}
                </details>
            );
        case "child_page":
            return <p>{value.title}</p>;
        case "image":
            const src = value.type === "external" ? value.external.url : value.file.url;
            const caption = value.caption ? value.caption[0]?.plain_text : null;
            return (
                <figure>
                    <img src={src} alt={caption} />
                    {caption && <figcaption>{caption}</figcaption>}
                </figure>
            );
        case "divider":
            return <hr key={id} />;
        case "quote":
            return <Quote text={value.rich_text} id={id} />
        case "code":
            const language = value.language;
            const code = value.rich_text[0].plain_text;
            const codeCaption = value.caption;
            return <Code language={language} code={code} caption={codeCaption} />
        case "file":
            const src_file =
                value.type === "external" ? value.external.url : value.file.url;
            const splitSourceArray = src_file.split("/");
            const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
            const caption_file = value.caption ? value.caption[0]?.plain_text : "";
            return (
                <figure>
                    <div className={styles.file}>
                        📎{" "}
                        <Link href={src_file} passHref>
                            {lastElementInArray.split("?")[0]}
                        </Link>
                    </div>
                    {caption_file && <figcaption>{caption_file}</figcaption>}
                </figure>
            );
        case "bookmark":
            const href = value.url
            return (
                <a href={href} target="_brank" className={styles.bookmark}>
                    {href}
                </a>
            );
        case "column_list":
            console.log(value)
            return null
        default:
            return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
                })`;
    }
};

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
                                <h1 className={styles.name}>
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
