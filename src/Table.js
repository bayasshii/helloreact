import React from 'react';

const table = {
  border: '1px solid #000',
  margin: '36px'
};

const tr = {
  borderButtom: '1px solid #000'
};

const td = {
  padding: '16px',
  textAlign: 'center'
};

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <table style={table}>
        <tbody>
            <tr style={tr}>
                <th></th>
                <th style={td}>属性</th>
                <th style={td}>座標</th>
            </tr>
            <tr style={tr}>
                <td style={td}>1</td>
                <td style={td}>○</td>
                <td style={td}>(1,0)</td>
            </tr>
        </tbody>
      </table>
    );
  }
}
export default Table;
