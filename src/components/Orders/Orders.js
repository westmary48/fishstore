import React from 'react';
import PropTypes from 'prop-types';

import OrderRow from '../OrderRow/OrderRow';

import orderShapes from '../../helpers/propz/orderShapes';

class Orders extends React.Component {
  static propTypes = {
    orders: PropTypes.arrayOf(orderShapes.orderShape),
  }

  render() {
    const orderComponents = this.props.orders.map(order => (
        <OrderRow key= {order.id} order = {order} />
    ));
    return (
      <div className="Orders">
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order #</th>
            <th scope="col">Date</th>
            <th scope="col"># Fish</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orderComponents}
        </tbody>
      </table>
    </div>
    );
  }
}

export default Orders;
