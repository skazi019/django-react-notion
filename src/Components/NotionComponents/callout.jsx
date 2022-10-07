import React from 'react'
import Text from './text'

export default function Callout(props) {
    const text = props.text;
    const color = props.color;

    const colorToClass = {
        "gray": "bg-neutral-100 text-gray-500",
        "brown": "bg-amber-100 text-amber-500",
        "orange": "bg-orange-100 text-orange-500",
        "yellow": "bg-yellow-100 text-yellow-500",
        "green": "bg-emerald-100 text-emerald-500",
        "blue": "bg-blue-100 text-blue-500",
        "purple": "bg-purple-100 text-purple-500",
        "pink": "bg-pink-100 text-pink-500",
        "red": "bg-red-100 text-red-500",
        "gray_background": "bg-neutral-100 text-gray-500",
        "brown_background": "bg-amber-100 text-amber-500",
        "orange_background": "bg-orange-100 text-orange-500",
        "yellow_background": "bg-yellow-100 text-yellow-500",
        "green_background": "bg-emerald-100 text-emerald-500",
        "blue_background": "bg-blue-100 text-blue-500",
        "purple_background": "bg-purple-100 text-purple-500",
        "pink_background": "bg-pink-100 text-pink-500",
        "red_background": "bg-red-100 text-red-500",
    }

    return (
        <div className={`mx-8 my-4 p-4 rounded-md ${colorToClass[color]}`}>
            <Text text={text} />
        </div>
    )
}
