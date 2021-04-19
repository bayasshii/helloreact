import React from 'react';
import Square from './Square.js'
import Game from './Otehon.js'

const button__wrap = {
  width: '300px',
};


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        { squares:
          [
            {
              position: [0, 0],
              value: null
            },
            {
              position: [0, 1],
              value: null
            },
            {
              position: [0, 2],
              value: null
            },
            {
              position: [1, 0],
              value: null
            },
            {
              position: [1, 1],
              value: null
            },
            {
              position: [1, 2],
              value: null
            },
            {
              position: [2, 0],
              value: null
            },
            {
              position: [2, 1],
              value: null
            },
            {
              position: [2, 2],
              value: null
            }
          ]
        }
      ],
      currentNumber: 0
    }
  };

  render() {
    const currentNumber = this.state.currentNumber
    const squares = this.state.history[currentNumber].squares
    return (
      <div>
        {console.log(squares)}
        <Game />
        <div style={button__wrap}>
          {squares.map((square) =>
            <Square
                square={square}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Board;
