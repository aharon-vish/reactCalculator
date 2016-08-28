import React from 'react';
import Digit from './Digit.jsx';

var KeyBoard = React.createClass({
    getDefaultProps: function() {
        return {value: 'default value'};
    },
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
    render: function() {
        var results = this.digitKeyBoard;
        console.log(this.state);
        console.log(this.props);
        return (
            <ol>
                {results.map(function(result) {
                    return <Digit key={result} data={result}/>;
                })}
            </ol>
        );
    }
});
export default KeyBoard;
