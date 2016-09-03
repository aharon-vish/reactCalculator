import React from 'react';

class InputDigit extends React.Component {

    constructor(props) {
        super(props);
    }
    keyDown(e) {
        if ((e.keyCode < 48 || e.keyCode > 58) && e.keyCode !== 8) {
            e.preventDefault();
        }
    }
    render() {
        return (
            <input type="text" value={this.props.value} onKeyDown={this.keyDown}></input>
        );
    }
}

export default InputDigit;
