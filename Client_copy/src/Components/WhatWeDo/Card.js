/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Card = props => {
	return (
		<div className="col-lg-3 mx-auto col-sm-5 mb-5 col-8 card-shadow card">
			<img className="card-img-top img-fluid  mt-2 _card" alt="card" src={props.image} />
			<h5 className="card-title text-center font-weight-bold mt-3">{props.title}</h5>
		</div>
	);
};

export default Card;
