import React from 'react'

export default function Image(props) {
    const src = props.src;
    const caption = props.caption

    return (
        <figure className='flex flex-col justify-center items-center'>
            <img src={src} alt={caption} className='rounded-md' />
            {caption && <figcaption className='italic text-sm'>{caption}</figcaption>}
        </figure>
    );
}
