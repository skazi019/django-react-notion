import Text from "./text";

export default function Paragraph(props) {
    const text = props.text;
    const fontType = props.fontType;
    const extraClasses = props.extraClasses;

    return (
        <p>
            <Text text={text} extraClasses={extraClasses} fontType={fontType} />
        </p>
    );

}