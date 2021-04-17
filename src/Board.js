import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square.js'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const list = [
      [1, 1],
      [1, 2],
    ]
    return (
      <div>
        {
          list.map((i) =>
          <Square
              vlue={i[1]}
           />
          )
        }
      </div>
    );
  }
}
export default Board;
