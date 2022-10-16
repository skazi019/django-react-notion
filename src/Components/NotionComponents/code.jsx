import React from 'react'
import { useSettingStore } from '../../store';
import Paragraph from './pararaph';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code(props) {
    const code = props.code;
    const language = props.language;
    const caption = props.caption;

    const mode = useSettingStore((state) => state.darkMode);
    const codeStyle = mode ? atomOneDarkReasonable : atomOneDark;

    return (
        <div className='my-4 flex flex-col justify-center items-left'>
            <Paragraph text={caption} extraClasses="italic text-sm text-gray-400" />
            <SyntaxHighlighter language={language} style={codeStyle} className='rounded-md'>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
