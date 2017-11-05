import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => {
  return (
    <article className="card">
      <div className="image-container">
        <img className="prod-image" src={props.image} alt="product"/>
      </div>
      <div>
        <h2 className="prod-description">{props.title}</h2>
      </div>
      <div>
        <h3 className="prod-price">{props.price}</h3>
      </div>
      <div className="link-container2">
        <a className="prod-link" target="_blank" href={props.link}>
          See On Amazon
        </a>
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
