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
      <button
        style={button}
        onClick={() => this.props.onClick(this.props.x, this.props.y)}
      >
        {this.props.square ? this.props.square : "nullだよん"}
      </button>
    );
  }
}
export default Square;
