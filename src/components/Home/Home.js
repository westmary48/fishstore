import React from 'react';

import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className = "row">
          <div className = "col">
        <Inventory />
        </div>
        <div className = "col">
        <NewOrder />
        </div>
        <div className = "col">
        <Orders />
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
