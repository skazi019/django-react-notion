import React from 'react'

export default function Video(props) {
    const src = props.src;
    const caption = props.caption;

    return (
        <>
            <video controls >
                <source src={src} />
            </video>

        </>
    )
}
