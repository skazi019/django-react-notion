import React from 'react'
import EmptyLine from './emptyline';
import { RoughNotation } from 'react-rough-notation'
import { getNotationColor } from './colors';
import { useSettingStore } from '../../store';

export default function Text(props) {
    const text = props.text;
    const extraClasses = props.extraClasses;

    const mode = useSettingStore((state) => state.darkMode);
    const notationColorToClass = getNotationColor(mode);

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
                    else if (underline) {
                        return (
                            <RoughNotation type="underline" color={notationColorToClass[color]} padding={(0, 0)} strokeWidth={1} show={true} >
                                {text.content}
                            </RoughNotation>
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
                                <RoughNotation type="circle" color={notationColorToClass[color]} padding={(1, 0)} show={true}>
                                    {text.content}
                                </RoughNotation>
                            )
                        }
                    }
                    else if (strikethrough) {
                        return (
                            <RoughNotation type="strike-through" color={notationColorToClass[color]} strokeWidth={1} show={true} >
                                {text.content}
                            </RoughNotation>
                        )
                    }
                    else {
                        return (
                            <span id={id}
                                className={`
                                ${extraClasses} 
                                ${bold ? 'font-semibold' : ''} 
                                ${code ? 'bg-gray-200 px-1 rounded text-red-500 dark:bg-gray-300 dark:text-red-500' : ''} 
                                ${italic ? 'italic' : ''}
                                `}
                            >
                                {text.link ? <a href={text.link.url} target='_blank' rel="noreferrer" className='transition text-gray-400 underline underline-offset-2 hover:text-gray-200'>{text.content}</a> : text.content}
                            </span>
                        );
                    }
                })
            }
        </>
    )
}
