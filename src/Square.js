import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  border: '1px solid #000',
  padding: '24px',
  width: '50px',
};

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <button style={style}>
        {this.props.vlue}
      </button>
    );
  }
}
export default Square;
