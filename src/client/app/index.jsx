import React from 'react';
import {render} from 'react-dom';
import InputDigit from './InputDigit.jsx';
import KeyBoard from './KeyBoard.jsx';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data:''};
    }

    handelClickDigitEvent(e) {
        if(Number.isInteger(parseInt(e.currentTarget.value))||
            e.currentTarget.value==='.'){
            var str =  this.state.data + e.currentTarget.value;
            return this.setState({data: str});
        }

    }

    render() {
        return (
            <div>
                <InputDigit value={this.state.data}/>
                <KeyBoard handelClickDigit={this.handelClickDigitEvent.bind(this)}/>
            </div>
        )
    }
}
render(<App/>, document.getElementById('app'));
