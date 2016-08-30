import React from 'react';

class Digit extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;
    console.log(props);
    return (
      <button onClick={props.test}>
        {this.props.data}
      </button>
    );
  }
}
export default Digit;
