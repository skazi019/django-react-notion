import Text from "./text";

export default function Paragraph(props) {
    const text = props.text;

    return (
        <p>
            <Text text={text} />
        </p>
    );

}