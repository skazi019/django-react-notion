import React from 'react'
import EmptyLine from './emptyline';
import { RoughNotation } from 'react-rough-notation'
import { getNotationColor } from './colors';
import { useSettingStore } from '../../store';

export default function Text(props) {
    const text = props.text;
    const fontType = props.fontType;
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
                            <span className={`${fontType}`}>
                                <RoughNotation type="underline" color={notationColorToClass[color]} padding={(0, 0)} strokeWidth={1} show={true} >
                                    {text.content}
                                </RoughNotation>
                            </span>
                        )
                    }
                    else if (color !== 'default' && !strikethrough) {
                        if (color.split('_')[1] === 'background') {
                            return (
                                <span className={`${fontType}`}>
                                    <RoughNotation className='mx-[2px]' type="highlight" color={notationColorToClass[color]} padding={(0, 0)} show={true}>
                                        {text.content}
                                    </RoughNotation>
                                </span>
                            )
                        } else {
                            return (
                                <span className={`${fontType}`}>
                                    <RoughNotation type="circle" color={notationColorToClass[color]} padding={(1, 0)} show={true}>
                                        {text.content}
                                    </RoughNotation>
                                </span>
                            )
                        }
                    }
                    else if (strikethrough) {
                        return (
                            <span className={`${fontType}`}>
                                <RoughNotation type="strike-through" color={notationColorToClass[color]} strokeWidth={1} show={true} >
                                    {text.content}
                                </RoughNotation>
                            </span>
                        )
                    }
                    else {
                        return (
                            <span id={id}
                                className={`
                                font-hind
                                ${fontType}
                                ${extraClasses} 
                                ${bold ? 'font-semibold' : ''} 
                                ${code ? 'bg-gray-200 px-1 rounded text-red-500 dark:bg-stone-200 dark:text-red-500' : ''} 
                                ${italic ? 'italic' : ''}
                                `}
                            >
                                {text.link ?
                                    <a
                                        href={text.link.url}
                                        target='_blank'
                                        rel="noreferrer"
                                        className={`${fontType} transition duration-300 font-hind text-gray-400 underline underline-offset-2 hover:text-gray-200`}
                                    >
                                        {text.content}
                                    </a>
                                    :
                                    text.content}
                            </span>
                        );
                    }
                })
            }
        </>
    )
}
