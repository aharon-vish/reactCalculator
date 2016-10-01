import React from 'react';
import Digit from './Digit.jsx';

class KeyBoard extends React.Component {

    constructor(props) {
        super(props);
        var divStyle = {
            width: '100%',
            height: '90%',
            display: 'flex',
            flexWrap: 'wrap',
            border: '1px solid red'
        };
        this.state ={
            digitKeyBoard : [{btnValue:'AC'}, {btnValue:'-/+'},{btnValue: '%'},{btnValue: '/'},
                             {btnValue:'7'}, {btnValue:'8'}, {btnValue:'9'}, {btnValue:'X'},
                             {btnValue:'4'},{btnValue: '5'},{btnValue: '6'},{btnValue: '-'},
                             {btnValue:'1'},{btnValue: '2'},{btnValue: '3'},{btnValue: '+'},
                             {btnValue:'0'},{btnValue: '.'}, {btnValue:'='}],
            style:divStyle
        };
    }

    render() {
        return (
            <div style={this.state.style}>
                {this.state.digitKeyBoard.map(function (btnKey) {
                    if(Number.isInteger(parseInt(btnKey.btnValue))){
                        return <Digit key={btnKey.btnValue} data={btnKey.btnValue} number
                                      clickEvent={this.props.handelClickDigit}/>;
                    }else
                        return <Digit key={btnKey.btnValue} data={btnKey.btnValue} mathAction clickEvent={this.props.handelClickDigit}/>;
                },this)}
            </div>
        );
    }
}
export default KeyBoard;
