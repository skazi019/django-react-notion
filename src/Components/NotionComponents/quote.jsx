import Text from "./text";

export default function Quote(props) {
    const text = props.text
    const id = props.id
    const color = props.color

    const colorToClass = {
        "default": "bg-neutral-100 text-gray-800 border-l-4 border-gray-600",
        "gray": "bg-neutral-100 text-gray-800 border-l-4 border-gray-600",
        "brown": "bg-amber-100 text-amber-500 border-l-4 border-amber-500",
        "orange": "bg-orange-100 text-orange-500 border-l-4 border-orange-500",
        "yellow": "bg-yellow-100 text-yellow-500 border-l-4 border-yellow-500",
        "green": "bg-emerald-100 text-emerald-500 border-l-4 border-emerald-500",
        "blue": "bg-blue-100 text-blue-500 border-l-4 border-blue-500",
        "purple": "bg-purple-100 text-purple-500 border-l-4 border-purple-500",
        "pink": "bg-pink-100 text-pink-500 border-l-4 border-pink-500",
        "red": "bg-red-100 text-red-500 border-l-4 border-red-500",
        "gray_background": "bg-neutral-100 text-gray-800 border-l-4 border-gray-600",
        "brown_background": "bg-amber-100 text-amber-500 border-l-4 border-amber-500",
        "orange_background": "bg-orange-100 text-orange-500 border-l-4 border-orange-500",
        "yellow_background": "bg-yellow-100 text-yellow-500 border-l-4 border-yellow-500",
        "green_background": "bg-emerald-100 text-emerald-500 border-l-4 border-emerald-500",
        "blue_background": "bg-blue-100 text-blue-500 border-l-4 border-blue-500",
        "purple_background": "bg-purple-100 text-purple-500 border-l-4 border-purple-500",
        "pink_background": "bg-pink-100 text-pink-500 border-l-4 border-pink-500",
        "red_background": "bg-red-100 text-red-500 border-l-4 border-red-500",
    }

    return (
        <div className="px-8 my-8">
            <blockquote id={id} className={`p-4 ${colorToClass[color]}`}>
                <Text text={text} extraClasses="pl-2" />
            </blockquote>
        </div>
    );

}