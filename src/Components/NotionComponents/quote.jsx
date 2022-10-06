import Text from "./text";

export default function Quote(props) {
    const text = props.text
    const id = props.id

    return (
        <blockquote id={id} className="border-l-2 border-black">
            <Text text={text} extraClasses="pl-2" />
        </blockquote>
    );

}