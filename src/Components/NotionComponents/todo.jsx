import React from "react";
import Text from "./text";

export default function Todo(props) {
    const text = props.text;
    const id = props.id;
    const checked = props.checked;
    const extraClasses = props.extraClasses;

    return (
        <div>
            <label htmlFor={id} className='flex flex-row gap-2'>
                <input type="checkbox" id={id} disabled='disabled' defaultChecked={checked} />
                <Text text={text} />
            </label>
        </div>
    );

}