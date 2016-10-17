import React from 'react';

const Digit = (props) => {

    var btnStyle = {
        flex: props.style.width ? '0 0 50%':'0 0 25%',
        padding: '5px',
        background: props.style.color,
        marginLeft: props.style.marginLeft? props.style.marginLeft : '',
        color: 'wheat',
        fontSize: '300%',
        fontWeight: 'bold'
    };
    return (
        <button style={btnStyle}
                onClick={props.clickEvent} value={props.data}
                action={props.action}>
            {props.data}
        </button>
    );
};
export default Digit;