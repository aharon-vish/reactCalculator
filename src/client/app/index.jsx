import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import InputDigit from './InputDigit.jsx';
import KeyBoard from './KeyBoard.jsx';
class App extends React.Component {
  render () {
    return (
      <div>
        <InputDigit />
        <AwesomeComponent />
        <KeyBoard/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
