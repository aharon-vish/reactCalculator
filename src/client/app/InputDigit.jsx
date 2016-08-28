import React from 'react';

class InputDigit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueIput: 0
        };
    }
    keyDown(e) {
      console.log(e.keyCode);
        if ((e.keyCode < 48 || e.keyCode > 58) && e.keyCode !== 8) {
            e.preventDefault();
        }
    }
    render() {
        return (
            <input type="text" onKeyDown={this.keyDown}></input>
        );
    }
}
export default InputDigit;
