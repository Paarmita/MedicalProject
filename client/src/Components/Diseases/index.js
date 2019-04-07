/* eslint-disable import/named */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { data } from './Data';
import Card from './Card';
import './style.css';

const html = [...data].map((x, key) => <Card key={key} image={x.icon} name={x.name} />);
class Diseases extends React.Component {
	render() {
		return (
			<div className="container main">
				<div className="mt-2">
					<div>
						<h1 className="diseases_title">Diseases</h1>
					</div>
					<div className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5 mx-40">
						<div className="provide-card-row">{html}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Diseases;
