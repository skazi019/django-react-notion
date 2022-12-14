import Paragraph from './NotionComponents/pararaph';
import Heading from './NotionComponents/heading';
import List from "./NotionComponents/lists";
import Quote from "./NotionComponents/quote";
import Code from "./NotionComponents/code";
import Todo from "./NotionComponents/todo";
import Callout from "./NotionComponents/callout";
import Bookmark from "./NotionComponents/bookmark";
import Image from "./NotionComponents/image";
import Video from './NotionComponents/video';

export const renderBlock = (block) => {
    const { type, id, has_children } = block;
    const value = block[type];

    const children = has_children ? block.children : null;

    switch (type) {
        case "paragraph":
            return <Paragraph text={value.rich_text} fontType='font-hind' />
        case "heading_1":
        case "heading_2":
        case "heading_3":
            return <Heading text={value.rich_text} type={type} />
        case "bulleted_list_item":
        case "numbered_list_item":
            return <List text={value.rich_text} type={type} children={children} fontType='font-hind' />
        case "to_do":
            return <Todo text={value.rich_text} id={id} checked={value.checked} />
        case "child_page":
            return <p>{value.title}</p>;
        case "image":
            const src = value.type === "external" ? value.external.url : value.file.url;
            const caption = value.caption ? value.caption[0]?.plain_text : null;
            return <Image src={src} caption={caption} />
        case "video":
            const videoSrc = value.type === "file" ? value.file.url : value.external.url;
            const videoCaption = value.caption ? value.caption : null;
            if (value.type === 'external') {
                return <Bookmark url={videoSrc} text={videoCaption} />
            }
            return <Video src={videoSrc} caption={videoCaption} />
        case "divider":
            return <hr key={id} />;
        case "quote":
            return <Quote text={value.rich_text} id={id} color={value.color} fontType='font-montserrat' />
        case "code":
            const language = value.language;
            const code = value.rich_text[0].plain_text;
            const codeCaption = value.caption;
            return <Code language={language} code={code} caption={codeCaption} />
        case "bookmark":
            const href = value.url
            return <Bookmark text={value.caption} url={href} fontType='font-montserrat' />
        case "column_list":
            return null
        case "callout":
            return <Callout text={value.rich_text} color={value.color} fontType='font-montserrat' />
        default:
            return `??? Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
                })`;
    }
};