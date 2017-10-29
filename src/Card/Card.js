import React from 'react';

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="product"/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3>{props.price}</h3>
      <a href={props.link}>See On Amazon</a>
    </div>
  );
};
