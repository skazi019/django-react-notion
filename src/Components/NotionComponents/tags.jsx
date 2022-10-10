import React, { useRef } from 'react'
import { colorToClass } from './colors';
import { useFilterStore } from '../../store';

export default function Tags(props) {
    const tags = props.tags;
    const callback = props.callback ? props.callback : null;

    const executeCallback = (event, tag) => {
        callback(tag);
    }

    const { allTags, tagFilter } = useFilterStore(
        (state) => ({
            allTags: state.allTags,
            tagFilter: state.tagFilter,
        })
    )


    return (
        <div className='flex flex-row justify-start items-center gap-2 flex-wrap'>
            {
                tags.map((tag, i) => (
                    <button
                        onClick={(event) => executeCallback(event, tag)}
                        className={`${colorToClass[tag.color]} px-2 rounded text-xs`}
                    >
                        {tag.name}
                    </button>
                ))
            }
        </div>
    )
}
