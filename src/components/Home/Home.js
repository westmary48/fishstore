import React from 'react';

import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Inventory />
        <NewOrder />
        <Orders />
      </div>
    );
  }
}

export default Home;
