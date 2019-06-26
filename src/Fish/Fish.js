import React from 'react';

import './Fish.scss';

class Fish extends React.Component {
  render() {
    const { fish } = this.props;
    return (
      <li className = "Fish">
        <h3 className = "name">{fish.name}</h3>
      </li>

    );
  }
}

export default Fish;
