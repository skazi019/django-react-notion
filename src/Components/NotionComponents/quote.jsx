import Text from "./text";

export default function Quote(props) {
    const text = props.text
    const id = props.id

    return (
        <div className="px-8 my-4">
            <blockquote id={id} className="p-4 bg-gray-50 border-l-4 border-gray-300">
                <Text text={text} extraClasses="pl-2 text-gray-700" />
            </blockquote>
        </div>
    );

}