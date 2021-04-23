import React from 'react';
import Square from './Square.js'
import Game from './Otehon.js'

const button__wrap = {
  width: '300px',
  display: 'flex',
  flexWrap: 'wrap'
};


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [JSON.parse(JSON.stringify((new Array(3)).fill((new Array(3)).fill(null))))],
      stepNumber: 0,
      xIsNext: "X"
    }
  };

  handleClick(x, y) {
    const history = this.state.history
    const current = history[this.state.stepNumber];
    const squares = current.slice();

    squares[y][x] = "ちゃんと動いたZ！！";

    const squares_slice = squares.slice();

    this.setState({
      history: history.concat([squares_slice]),
      stepNumber: history.length
    });

   console.log(this.state.history)
  }

  render() {
    const stepNumber = this.state.stepNumber
    const squares = this.state.history[stepNumber]
    return (
      <div>
        <Game />
        <div>{stepNumber}</div>
        <div style={button__wrap}>
          {
            squares.map((squares_y, index_y) =>
              squares_y.map((square, index_x) =>
                <Square
                    x={index_x}
                    y={index_y}
                    square={square}
                    onClick={(x, y) => this.handleClick(x, y)}
                />
              )
            )
          }
        </div>
      </div>
    );
  }
}
export default Board;
