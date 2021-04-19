import React from 'react';

const button = {
  border: '1px solid #000',
  height: '100px',
  width: '100px',
};

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <button style={button}>
        {this.props.square.position[0]}
        ,
        {this.props.square.position[1]}
      </button>
    );
  }
}
export default Square;
