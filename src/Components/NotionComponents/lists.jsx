import React from 'react'
import Text from './text'

export default function List(props) {
    const text = props.text;
    const type = props.type;

    const listTag = function (type, text) {

        switch (type) {
            case 'numbered_list_item':
            case 'bulleted_list_item':
                return (
                    <ul className='list-disc'>
                        <li>
                            <Text text={text} />
                        </li>
                    </ul>
                )
            // return (
            //     <ol className='list-decimal'>
            //         <li>
            //             <Text text={text} />
            //         </li>
            //     </ol>
            // )
            default:
                return null
        }

    }

    return (
        <>
            {listTag(type, text)}
        </>
    );
}