import React from 'react'
import Text from './text';

export default function Bookmark(props) {
    const text = props.text;
    const url = props.url;
    const extraClasses = props.extraClasses;

    return (
        <a href={url} target="_brank" className={`p-4 border rounded flex flex-row justify-start items-start gap-2 ${extraClasses}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
            </svg>
            <Text text={text} />
        </a>
    );
}
