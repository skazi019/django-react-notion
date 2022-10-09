import React, { Fragment } from 'react'
import Text from './text'
import { renderBlock } from '../renderblock';

export default function List(props) {
    const text = props.text;
    const type = props.type;
    const children = props.children ? props.children : false;

    const listTag = function (type, text) {

        switch (type) {
            case 'numbered_list_item':
            case 'bulleted_list_item':
                return (
                    <ul className='list-disc'>
                        <li>
                            <Text text={text} />
                        </li>
                        {
                            children ? (
                                children.map((block, key) => (
                                    <ul key={block.id}>{renderBlock(block)}</ul>
                                ))
                            )
                                :
                                null
                        }
                    </ul>
                )
            default:
                return null
        }

    }

    return (
        <div className={`px-8`}>
            {listTag(type, text)}
        </div>
    );
}