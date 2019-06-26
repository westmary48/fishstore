import React from 'react';

import fishData from '../../helpers/data/fishData';

class Inventory extends React.Component {
  state = {
    fishes: [],
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('could not get fishes', err));
  }

  render() {
    return (
      <h2>Inventory</h2>
    );
  }
}

export default Inventory;
