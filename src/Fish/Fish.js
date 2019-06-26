import React from 'react';

import fishShape from '../helpers/propz/fishShapes';
import format from '../helpers/format';

import './Fish.scss';

class Fish extends React.Component {
  static propTypes = {
    fish: fishShape.fishShape,
  };

  render() {
    const { fish } = this.props;
    const isAvailable = fish.status === 'available';
    // eslint-disable-next-line
    const image = require(`${fish.image}`);
    return (
      <li className="Fish">
        <img src={image} alt={fish.name} />
        <h3 className="name">
          {fish.name}
          <span className="price">{format.formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button disabled={!isAvailable}>
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
