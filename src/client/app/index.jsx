import React from 'react';
import {render} from 'react-dom';
import InputDigit from './InputDigit.jsx';
import KeyBoard from './KeyBoard.jsx';
class App extends React.Component {
  test(){

  }
  render () {
    return (
      <div>
        <InputDigit />
        <KeyBoard/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
