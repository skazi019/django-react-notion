import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import Text from "./NotionComponents/text";
import Paragraph from './NotionComponents/pararaph';
import Heading from './NotionComponents/heading';
import List from "./NotionComponents/lists";
import Quote from "./NotionComponents/quote";
import Code from "./NotionComponents/code";
import Todo from "./NotionComponents/todo";
import Callout from "./NotionComponents/callout";
import Bookmark from "./NotionComponents/bookmark";
import Image from "./NotionComponents/image";

export const renderBlock = (block) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
        case "paragraph":
            return <Paragraph text={value.rich_text} />
        case "heading_1":
        case "heading_2":
        case "heading_3":
            return <Heading text={value.rich_text} type={type} />
        case "bulleted_list_item":
        case "numbered_list_item":
            return <List text={value.rich_text} type={type} />
        case "to_do":
            return <Todo text={value.rich_text} id={id} checked={value.checked} />
        // case "toggle":
        //     return (
        //         <details>
        //             <summary>
        //                 <Text text={value.rich_text} />
        //             </summary>
        //             {value.children?.map((block) => (
        //                 <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        //             ))}
        //         </details>
        //     );
        case "child_page":
            return <p>{value.title}</p>;
        case "image":
            const src = value.type === "external" ? value.external.url : value.file.url;
            const caption = value.caption ? value.caption[0]?.plain_text : null;
            return <Image src={src} caption={caption} />
        case "divider":
            return <hr key={id} />;
        case "quote":
            return <Quote text={value.rich_text} id={id} />
        case "code":
            const language = value.language;
            const code = value.rich_text[0].plain_text;
            const codeCaption = value.caption;
            return <Code language={language} code={code} caption={codeCaption} />
        // case "file":
        //     const src_file =
        //         value.type === "external" ? value.external.url : value.file.url;
        //     const splitSourceArray = src_file.split("/");
        //     const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
        //     const caption_file = value.caption ? value.caption[0]?.plain_text : "";
        //     return (
        //         <figure>
        //             <div >
        //                 📎{" "}
        //                 <Link href={src_file} passHref>
        //                     {lastElementInArray.split("?")[0]}
        //                 </Link>
        //             </div>
        //             {caption_file && <figcaption>{caption_file}</figcaption>}
        //         </figure>
        //     );
        case "bookmark":
            console.log(value)
            const href = value.url
            return <Bookmark text={value.caption} url={href} />
        case "column_list":
            console.log(value)
            return null
        case "callout":
            return <Callout text={value.rich_text} color={value.color} />
        default:
            return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
                })`;
    }
};