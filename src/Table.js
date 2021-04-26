import React from 'react';

const table = {
  margin: '36px'
};

const tr = {
  borderButtom: '1px solid #000'
};

const td = {
  padding: '16px',
  textAlign: 'center'
};

const table_head = {
  background: '#00ffff'
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const orders = this.props.orders
    return (
      <table style={table}>
        <tbody>
            <tr style={table_head}>
                <th></th>
                <th style={td}>属性</th>
                <th style={td}>座標</th>
            </tr>
            {
              orders[0] ? orders.map((order, i)=>
              <tr style={tr} key={i}>
                <td style={td}>{i+1}</td>
                <td style={td}>{ i%2 ? "X" : "○"}</td>
                <td style={td}>{order[1]}, {order[0]}</td>
              </tr>
            )
            :
              <tr>
                <td colSpan="3" style={td}>No Data</td>
              </tr>
            }
        </tbody>
      </table>
    );
  }
}
export default Table;
