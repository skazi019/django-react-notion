import React from 'react'
import EmptyLine from './emptyline';

export default function Text(props) {
    const text = props.text;
    const extraClasses = props.extraClasses;

    if (!text) {
        return null;
    }
    return (
        <>
            {
                text.map((value, i) => {
                    const {
                        id,
                        annotations: { bold, code, color, italic, strikethrough, underline },
                        text,
                    } = value;

                    if (text.content === ' ') {
                        // Returning an empty div with some height to emulate empty line in notion
                        return (
                            <EmptyLine />
                        )
                    } else {
                        return (
                            <span key={id}
                                className={`${extraClasses} ${bold ? 'font-semibold' : ''} ${code ? 'bg-gray-200 px-1 rounded text-red-500' : ''} ${italic ? 'italic' : ''} ${strikethrough ? 'line-through' : ''} ${underline ? 'underline underline-offset-4' : ''} ${color ? 'text-' + color : ''}`}
                            >
                                {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
                            </span>
                        );
                    }
                })
            }
        </>
    )
}
