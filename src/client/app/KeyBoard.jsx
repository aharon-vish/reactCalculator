import React from 'react';
import Digit from './Digit.jsx';

class KeyBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            digitKeyBoard : ['AC', '-/+', '%', '/',
                             '7', '8', '9', 'X',
                             '4', '5', '6', '-',
                             '1', '2', '3', '+',
                             '0', '.', '=']
        };
    }

    render() {
        return (
            <div>
                {this.state.digitKeyBoard.map(function (btnKey) {
                    if(Number.isInteger(parseInt(btnKey))){
                        return <Digit key={btnKey} data={btnKey} number clickEvent={this.props.handelClickDigit}/>;
                    }else
                        return <Digit key={btnKey} data={btnKey} mathAction clickEvent={this.props.handelClickDigit}/>;
                },this)}
            </div>
        );
    }
}
export default KeyBoard;
