import React from 'react'
import { colorToClass } from './colors';

export default function Tags(props) {
    const tags = props.tags;

    return (
        <div className='flex flex-row justify-start items-center gap-2'>
            {
                tags.map((tag, i) => (
                    <p className={`${colorToClass[tag.color]} px-2 rounded text-xs`}>{tag.name}</p>
                ))
            }
        </div>
    )
}
