import React from 'react';

import moment from 'moment';

import orderShape from '../../helpers/propz/orderShapes';

class OrderRow extends React.Component {
  static propTypes = {
    orders: orderShape.orderShape,
  };

  render() {
    const { order } = this.props;
    const numFish = Object.values(order.fishes).reduce((a, b) => a + b);
    return (
      <tr>
        <th>{order.name}</th>
        <td>{moment(order.dateTime).format('LLL')}</td>
        <td>{numFish}</td>
        <td><button className = "btn btn-danger">X</button></td>
      </tr>
    );
  }
}

export default OrderRow;
