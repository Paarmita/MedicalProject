/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ data }) => (
	<div className="col-lg-4 parent-container">
		<div className="card shadow h-100">
			<div className="img-container">
				<h6>{data.name}</h6>
				<div>
					<img width="30px" src={data.icon} />
				</div>
			</div>
			<div>
				{data.type.map((x, i) => {
					if (data.type.length - 1 === i) {
						return (
							<span>
								<a href="x">{x}</a>
							</span>
						);
					}
					return (
						<span>
							<a href="x">{x}</a> ,
						</span>
					);
				})}
			</div>
		</div>
	</div>
);

export default Card;
