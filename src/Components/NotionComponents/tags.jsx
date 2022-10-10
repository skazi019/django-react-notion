import React from 'react'
import { colorToClass } from './colors';

export default function Tags(props) {
    const tags = props.tags;
    const callback = props.callback ? props.callback : null;

    const executeCallback = (event, tag) => {
        callback(tag);
    }

    return (
        <div className='flex flex-row justify-start items-center gap-2 flex-wrap'>
            {
                tags.length > 0 ?
                    tags.map((tag, i) => (
                        <button
                            onClick={(event) => executeCallback(event, tag)}
                            className={`${colorToClass[tag.color]} px-2 rounded text-xs`}
                        >
                            {tag.name}
                        </button>
                    ))
                    :
                    <p className='text-xs text-gray-300'>No tags to show</p>
            }
        </div>
    )
}
