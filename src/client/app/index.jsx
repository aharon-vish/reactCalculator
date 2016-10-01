import React from 'react';
import {render} from 'react-dom';
import InputDigit from './InputDigit.jsx';
import KeyBoard from './KeyBoard.jsx';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: '',dotUse:true};
    }

    handelClickDigitEvent(e) {
        var eventValue = e.currentTarget.value;
        var action = (eventValue !== '.') ?
            e.currentTarget.getAttribute('action') : '.';

        switch (action) {
            case 'number':
                return this.setState({data: this.state.data + e.currentTarget.value});
                break;
            case 'mathAction':
                if (this.checkInputValue()) {
                    return this.setState({data: this.state.data + ' ' + e.currentTarget.value + ' '});
                }
                break;
            case '.':
                if (this.checkInputValue() && this.state.dotUse) {
                    this.state.dotUse = false;
                    return this.setState({data: this.state.data + e.currentTarget.value});
                }
                break;
            default:
                console.log('never mind');
        }

    }

    checkInputValue() {
        var splits = this.state.data.split('');
        if (splits.length) {
            if (Number.isInteger(parseInt(splits[splits.length - 1]))) {
                return true;
            }
            return false;
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
