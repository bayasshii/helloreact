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
      [
        [1, 1],
        [1, 2],
        [1, 3]
      ],[
        [2, 1],
        [2, 2],
        [2, 3]
      ],[
        [3, 1],
        [3, 2],
        [3, 3]
      ]
    ]
    return (
      <div>
        {list.map((items) =>
          <div>
            {items.map((item) =>
              <Square
                  vlue={item}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
export default Board;
