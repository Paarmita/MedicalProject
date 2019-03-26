/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ image, name }) => (
	<div className="col-lg-4 col-md-6 mx-auto col-sm-8 mb-5 col-8 col-12">
		<div className="card shadow h-100">
			<h5 className="card-title text-center text-dark font-weight-bold mt-3">{name}</h5>
			<div className="centered-image d-flex">
				<img className="m-2" alt="card" src={image} />
			</div>
		</div>
	</div>
);

export default Card;
