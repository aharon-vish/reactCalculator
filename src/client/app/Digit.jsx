
import React from 'react';

const Digit = (props) => {
    return (
            <button onClick={props.clickEvent} value={props.data}>
                {props.data}
            </button>
        );
}
export default Digit;