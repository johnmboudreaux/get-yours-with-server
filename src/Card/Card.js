import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => {
  return (
    <article className="card">
      <div className="prod-link">
        <a href={props.link}>See On Amazon</a>
      </div>
      <div className="prod-image">
        <img src={props.image} alt="product"/>
      </div>
      <div className="prod-description">
        <p>{props.description}</p>
      </div>
      <div className="prod-title">
        <h2>{props.title}</h2>
      </div>
      <div className="prod-price">
        <h3>{props.price}</h3>
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  link:PropTypes.string
};
