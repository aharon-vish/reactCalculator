
import React from 'react';

const Digit = (props) => {
    return (
            <button onClick={props.clickEvent} value={props.data}
                    data-set={props.number?'number':'mathAction'}>
                {props.data}
            </button>
        );
}
export default Digit;