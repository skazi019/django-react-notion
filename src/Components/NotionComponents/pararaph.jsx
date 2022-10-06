import Text from "./text";

export default function Paragraph(props) {
    const text = props.text;
    const extraClasses = props.extraClasses;

    return (
        <p>
            <Text text={text} extraClasses={extraClasses} />
        </p>
    );

}