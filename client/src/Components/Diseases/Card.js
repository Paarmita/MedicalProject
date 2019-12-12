/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// import data from '../../Data/DiseasesData';

const Card = ({ data }) => (
	<div className="col-lg-4 my-3 ">
		<div
			className="card shadow h-100 px-3"
			style={{
				overflowWrap: 'break-word',
			}}
		>
			<div className="img-container">
				<h6> {data.name} </h6>
				<div>
					<img width="30px" src={data.icon} />
				</div>
			</div>
			<div>
				{data.type.map((x, i) => {
					return (
						<span key={x.title.name}>
							<Link to={`/diseases/${x.title.id}`}>{x.title.name}, </Link>
						</span>
					);
				})}
			</div>
		</div>
	</div>
);

export default Card;

