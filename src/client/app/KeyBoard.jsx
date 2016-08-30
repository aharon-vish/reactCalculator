import React from 'react';
import Digit from './Digit.jsx';

var KeyBoard = React.createClass({
    // getDefaultProps: function() {
    //     return {value: 'default value'};
    // },
    digitKeyBoard: [
      'AC','-/+','%','/',
      '7','8','9','X',
      '4','5','6','-',
      '1','2','3','+',
      '0','.','='
    ],
    getInitialState: function() {
        return {data: this.digitKeyBoard};
    },
    tesrt: function(){
        console.log('hi');
    },
    render: function() {
        var results = this.digitKeyBoard;
        var aaa = this.tesrt;
        console.log(this.state);
        console.log(this.props);
        return (
            <div>
                {results.map(function(result) {
                    return <Digit key={result} data={result} test={aaa} />;
                })}
            </div>
        );
    }
});
export default KeyBoard;
