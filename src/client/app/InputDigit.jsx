import React from 'react';

class InputDigit extends React.Component {

    constructor(props) {
        super(props);

        var inputStyle = {
            width: '100%',
            height: '10%',
            fontSize: '300%',
            fontWeight: 'bold'
        };
        this.state = {style: inputStyle};

    }

    keyDown(e) {
        if ((e.keyCode < 48 || e.keyCode > 58) && e.keyCode !== 8) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <input style={this.state.style} type="text" value={this.props.value} onKeyDown={this.keyDown}></input>
        );
    }
}

export default InputDigit;
