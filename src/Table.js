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
    const stepNumber = this.props.stepNumber
    return (
      <table style={table}>
        <tbody>
            <tr style={table_head}>
                <th></th>
                <th style={td}>属性</th>
                <th style={td}>座標</th>
                <th></th>
            </tr>
            {
              orders[0] ? orders.map((order, i)=>
              <tr style={tr} key={i}>
                <td style={td}>{i+1}</td>
                <td style={td}>{ i%2 ? "X" : "○"}</td>
                <td style={td}>{order[1]}, {order[0]}</td>
                <td>
                  {stepNumber === i+1 ? 
                    <div>イマココ</div>
                    :
                    <button onClick={() => this.props.onClick(i)}>巻き戻す</button>
                  }
                </td>
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
