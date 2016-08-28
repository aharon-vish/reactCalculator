import React from 'react';

class Digit extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button>
        {this.props.data}
      </button>
    );
  }
}
export default Digit;
