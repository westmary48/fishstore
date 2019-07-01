import React from 'react';

import './NewOrder.scss';

class NewOrder extends React.Component {
  renderOrder = (key) => {
    console.error(key);
  };

  render() {
    const { fishOrder } = this.props;
    const orderIds = Object.keys(fishOrder);
    const orderExists = orderIds.length > 0;
    return (
      <div className="NewOrder">
        <h1>New Order</h1>
        <form className='col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="order-name">Order Name:</label>
            <input
              type="text"
              className="form-control"
              id="order-name"
              placeholder="John's Order"
            />
          </div>
        </form>
        <ul>{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total: <strong>SOME TOTAL HERE</strong>
        </div>
        <div className="text-center">
          {
            orderExists ? (
              <button className="btn btn-outline-dark"> Save Order </button>
            ) : (
              <div>Add Inventory to your order</div>
            )
          }
        </div>
      </div>
    );
  }
}

export default NewOrder;
