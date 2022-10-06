import React from 'react'
import Paragraph from './pararaph';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code(props) {
    const code = props.code;
    const language = props.language;
    const caption = props.caption;

    return (
        <div className='flex flex-col justify-center item-left'>
            <Paragraph text={caption} extraClasses="italic text-sm" />
            <SyntaxHighlighter language={language} style={docco}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
