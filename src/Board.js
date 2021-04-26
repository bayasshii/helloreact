import React from 'react';
import Square from './Square.js'
import Table from './Table.js'

const button__wrap = {
  margin: '36px',
  width: '300px',
  height: '300px',
  display: 'flex',
  flexWrap: 'wrap',
};

const next_winner = {
  margin: '36px'
}

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
      const current = history[history.length - 1]
      const squares = JSON.parse(JSON.stringify(current))
      squares[y][x] = this.state.whatNext;

      this.updateWinner(squares)

      console.log(squares)

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
    let orders = []
    const history = this.state.history
    history.map((squares) => {
      squares.map((squares_y, index_y) => {
        squares_y.map((square, index_x) => {
          if (square) {
            if (!orders.some(
              (array)=>{
                return [index_y, index_x].every((e,i)=>{return array[i]===e})
                }
              )) {
              orders = orders.concat([[index_y, index_x]])
            }
          }
        })
      })
    })
    return (
      <Table
        orders={orders}
        onClick={(step)=>this.backStep(step)}
      />
    );
  }
  backStep(step) {
    this.setState({
      stepNumber: step,
      whatNext: (step % 2) === 0 ? "○" : "X"
    });
  }

  render() {
    const stepNumber = this.state.stepNumber
    const squares = this.state.history[stepNumber]
    const winner = this.state.winner
    const whatNext = this.state.whatNext

    return (
      <div>
        <div style={{display: 'flex'}}>
          <div style={button__wrap}>
            {
              squares.map((squares_y, index_y) =>
                squares_y.map((square, index_x) =>
                  <Square
                      key={[index_y,index_x]}
                      x={index_x}
                      y={index_y}
                      square={square}
                      onClick={(x, y) => this.handleClick(x, y)}
                  />
                )
              )
            }
          </div>
          <div>
            <div style={next_winner}>
              { winner ? "winner: " + winner :
               (stepNumber < 9 ? "next: " + whatNext : 'ひきわけ')
              }
            </div>
            {this.renderTable()}
          </div>
        </div>
      </div>
    );
  }
}
export default Board;
