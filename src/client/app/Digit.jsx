import React from 'react';

const Digit = (props) => {
    var btnStyle = {
        flex: '0 0 33.33%',
        padding: '5px'
    };
    return (
        <button style={btnStyle}
            onClick={props.clickEvent} value={props.data}
            action={props.number ? 'number' : 'mathAction'}>
            {props.data}
        </button>
    );
};
export default Digit;