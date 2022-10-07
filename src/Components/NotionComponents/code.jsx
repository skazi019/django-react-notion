import React from 'react'
import Paragraph from './pararaph';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code(props) {
    const code = props.code;
    const language = props.language;
    const caption = props.caption;

    return (
        <div className='flex flex-col justify-center items-left'>
            <Paragraph text={caption} extraClasses="italic text-sm" />
            <SyntaxHighlighter language={language} style={atomOneDark} className='rounded-md'>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
