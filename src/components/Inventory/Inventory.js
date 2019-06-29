import React from 'react';

import PropTypes from 'prop-types';

import fishShape from '../../helpers/propz/fishShapes';
import Fish from '../../Fish/Fish';


class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.arrayOf(fishShape.fishShape),
  };

  render() {
    const fishComponents = this.props.fishes.map(fish => (
      <Fish key = {fish.id} fish = {fish}/>
    ));
    return (
      <div className = "Inventory">
      <h2>Inventory</h2>
      <ul className = "fishes">
        {fishComponents}
      </ul>
      </div>
    );
  }
}

export default Inventory;
