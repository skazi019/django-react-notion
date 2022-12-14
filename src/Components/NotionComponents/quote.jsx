import Text from "./text";

export default function Quote(props) {
    const text = props.text
    const id = props.id
    const color = props.color
    const fontType = props.fontType;

    const colorToClass = {
        "default": "border-l-4 border-gray-800 dark:border-white",
        "gray": "border-l-4 border-gray-800 dark:border-white",
        "brown": "border-l-4 border-amber-500",
        "orange": "border-l-4 border-orange-500",
        "yellow": "border-l-4 border-yellow-500",
        "green": "border-l-4 border-emerald-500",
        "blue": "border-l-4 border-blue-500",
        "purple": "border-l-4 border-purple-500",
        "pink": "border-l-4 border-pink-500",
        "red": "border-l-4 border-red-500",
        "gray_background": "border-l-4 border-gray-600",
        "brown_background": "border-l-4 border-amber-500",
        "orange_background": "border-l-4 border-orange-500",
        "yellow_background": "border-l-4 border-yellow-500",
        "green_background": "border-l-4 border-emerald-500",
        "blue_background": "border-l-4 border-blue-500",
        "purple_background": "border-l-4 border-purple-500",
        "pink_background": "border-l-4 border-pink-500",
        "red_background": "border-l-4 border-red-500",
    }

    return (
        <div className="px-8 my-8">
            <blockquote id={id} className={`p-2 text-lg font-regular italic text-zinc-500 dark:text-neutral-100 ${colorToClass[color]}`}>
                <Text text={text} extraClasses="pl-2" fontType={fontType} />
            </blockquote>
        </div>
    );

}