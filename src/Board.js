import React from 'react';
import Square from './Square.js'
import Table from './Table.js'
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
      whatNext: "○",
      winner: null,
    }
  };

  handleClick(x, y) {
    if(!this.state.winner){
      const history = this.state.history
      const stepNumber = this.state.stepNumber

      const current = history[stepNumber]
      const squares = current.slice()
      squares[y][x] = this.state.whatNext;

      this.updateWinner(squares)

      const whatNext = this.state.whatNext === "X" ? "○" : "X"

      this.setState({
        history: history.concat([squares]),
        stepNumber: history.length,
        whatNext: whatNext
      });
    }
  }

  updateWinner (squares) {
    for (let i = 0; i < 3; i++) {
      if (squares[i][0] && squares[i][0] === squares[i][1] && squares[i][0] === squares[i][2]) {
        this.setState({
          winner: squares[i][0]
        })
      }
      else if (squares[0][i] && squares[0][i] === squares[1][i] && squares[0][i] === squares[2][i]) {
        this.setState({
          winner: squares[0][i]
        })
      }
    }
    if (squares[0][0] && squares[0][0] === squares[1][1] && squares[0][0] === squares[2][2]) {
      this.setState({
        winner: squares[0][0]
      })
    }
    if (squares[0][2] && squares[0][2] === squares[1][1] && squares[0][2] === squares[2][0]) {
      this.setState({
      winner: squares[0][2]
      })
    }
  }

  renderTable() {
    const order = []
    return (
      <Table
        order={order}
      />
    );
  }
  

  render() {
    const stepNumber = this.state.stepNumber
    const squares = this.state.history[stepNumber]
    const winner = this.state.winner
    const whatNext = this.state.whatNext

    return (
      <div>
        <Game />
        <div>{stepNumber}</div>
        <div>{ winner ? "winner: " + winner : "next: " + whatNext}</div>
        {/*
        {this.state.history[1] ? this.state.history[1] : "poyopoyo"}
        <br/>
        {this.state.history[2] ? this.state.history[2] : "poyopoyo"}
        <br/>
        {this.state.history[3] ? this.state.history[3] : "poyopoyo"}
        */}
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
