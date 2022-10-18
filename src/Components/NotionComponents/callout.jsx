import React from 'react'
import Text from './text'
import { colorToClass } from './colors';

export default function Callout(props) {
    const text = props.text;
    const color = props.color;
    const fontType = props.fontType;

    return (
        <div className={`transition mx-8 my-4 p-4 rounded-md ${colorToClass[color]}`}>
            <Text text={text} fontType={fontType} />
        </div>
    )
}
