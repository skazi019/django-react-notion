import React, { useRef } from 'react'

export default function Image(props) {
    const src = props.src;
    const caption = props.caption

    const imageRef = useRef();

    const openImg = () => {
        window.open(imageRef.current.src);
    }


    return (
        <figure className='flex flex-col justify-center items-center'>
            <img ref={imageRef} onClick={openImg} src={src} alt={caption} className='rounded-md cursor-zoom-in' loading='lazy' />
            {caption && <figcaption className='italic text-sm text-gray-400'>{caption}</figcaption>}
        </figure>
    );
}
