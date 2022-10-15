import React from 'react'
import EmptyLine from './emptyline';
import { RoughNotation } from 'react-rough-notation'
import { colorToClass } from './colors';

export default function Text(props) {
    const text = props.text;
    const extraClasses = props.extraClasses;


    const notationColorToClass = {
        "default": "bg-neutral-100 text-gray-800",
        "gray": "#94a3b8",
        "brown": "#fb923c",
        "orange": "#fb923c",
        "yellow": "#facc15",
        "green": "#34d399",
        "blue": "#67e8f9",
        "purple": "#a78bfa",
        "pink": "#f9a8d4",
        "red": "#fb7185",
        "gray_background": "#94a3b8",
        "brown_background": "#fb923c",
        "orange_background": "#fb923c",
        "yellow_background": "#facc15",
        "green_background": "#34d399",
        "blue_background": "#67e8f9",
        "purple_background": "#a78bfa",
        "pink_background": "#f9a8d4",
        "red_background": "#fb7185",
    }

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
                    }
                    else if (color !== 'default' && !strikethrough) {
                        if (color.split('_')[1] === 'background') {
                            return (
                                <RoughNotation className='mx-[2px]' type="highlight" color={notationColorToClass[color]} padding={(0, 0)} show={true}>
                                    {text.content}
                                </RoughNotation>
                            )
                        } else {
                            return (
                                <RoughNotation type="underline" color={notationColorToClass[color]} padding={(1, 0)} show={true}>
                                    {text.content}
                                </RoughNotation>
                            )
                        }
                    }
                    else if (strikethrough) {
                        console.log(text)
                        return (
                            <RoughNotation type="strike-through" color={notationColorToClass[color]} strokeWidth={1} show={true} >
                                {text.content}
                            </RoughNotation>
                        )
                    }
                    else {
                        return (
                            <span id={id}
                                className={`${extraClasses} ${bold ? 'font-semibold' : ''} ${code ? 'bg-gray-200 px-1 rounded text-red-500' : ''} ${italic ? 'italic' : ''} ${strikethrough ? 'line-through' : ''} ${underline ? 'underline underline-offset-2' : ''} `}
                            >
                                {text.link ? <a href={text.link.url} target='_blank' rel="noreferrer" className='text-gray-400 underline underline-offset-2'>{text.content}</a> : text.content}
                            </span>
                        );
                    }
                })
            }
        </>
    )
}
