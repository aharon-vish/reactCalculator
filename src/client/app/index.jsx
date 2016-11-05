import React from 'react';
import {render} from 'react-dom';
import InputDigit from './InputDigit.jsx';
import KeyBoard from './KeyBoard.jsx';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sum: '',
            flagRotateY: true,
            data: '',
            dotUse: true,
            contanierStyle: {
                perspective: '1000px'
            },
            flipperStyle: {
                transition: '0.6s',
                transformStyle: 'preserve-3d',
                position: 'relative',
                transform: ''
            },
            backStyle: {
                transform: 'rotateY(180deg)',
                position: 'absolute',
                top: '0',
                display: 'flex',
                justifyContent: 'center',
                width: '50%',
                margin: '0 25% 0 25%',
                flexDirection: 'column',
                alignItems: 'center'
            }

        }
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
                if (eventValue === '-/+') {
                    if(this.state.data.length === 0){
                        return this.setState({data: '-'});
                    } else if(this.state.data.length === 1 && this.state.data === '-' ){
                        return this.setState({data: ''});
                    }else {
                        return;
                    }
                }
                else if (eventValue === 'AC') {
                    return this.setState({data: ''});
                }
                else if(eventValue) {

                    return this.setState({data: this.state.data + ' ' + e.currentTarget.value + ' '});
                }
                break;
            case 'sumAction':

                return this.setState(
                    {
                        sum: eval(this.state.data),
                        flagRotateY: false,
                        data: ''
                    }
                );
                break;
            case '':
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

    flipMeBackPlease() {
        return this.setState({
            sum: '',
            flagRotateY: true
        })
    }

    render() {
        return (
            <div className="flip-container" style={this.state.contanierStyle}>
                <div className="flipper" style={Object.assign(this.state.flipperStyle, this.state.flagRotateY ?
                {transform: ''} : {transform: 'rotateY(180deg)'})}>
                    <div className="front">
                        <InputDigit value={this.state.data}/>
                        <KeyBoard handelClickDigit={this.handelClickDigitEvent.bind(this)}/>
                    </div>
                    <div className="back" style={this.state.backStyle}>
                        <div className="number">
                            {this.state.sum}
                        </div>
                        <div className="backButton" onClick={this.flipMeBackPlease.bind(this)}>
                            <span className="aBack">Flip</span>
                            <span className="bBack">Me</span>
                            <span className="cBack">Back</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
