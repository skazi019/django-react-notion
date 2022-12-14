import React from 'react'
import Text from './text'

export default function Heading(props) {
    const text = props.text;
    const type = props.type;

    const headingClasses = {
        "heading_1": "text-3xl font-semibold pb-2 pt-4 dark:text-white",
        "heading_2": "text-2xl font-semibold pb-2 pt-4 dark:text-white",
        "heading_3": "text-xl font-semibold pb-2 pt-4 dark:text-white",
    }

    const headingTag = function (type, text, classes) {

        switch (type) {
            case 'heading_1':
                return (
                    <h1 className={`${classes[type]}`}>
                        <Text text={text} />
                    </h1>
                )
            case 'heading_2':
                return (
                    <h2 className={`${classes[type]}`}>
                        <Text text={text} />
                    </h2>
                )
            case 'heading_3':
                return (
                    <h3 className={`${classes[type]}`}>
                        <Text text={text} />
                    </h3>
                )
            default:
                return null
        }

    }

    if (!text) {
        return null;
    }
    return (
        <>
            {headingTag(type, text, headingClasses)}
        </>
    )
}
