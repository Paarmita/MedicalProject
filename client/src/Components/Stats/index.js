import React, { Component } from 'react';
import './Stats.css';

const Card = props => {
	return (
		<div className="col-lg-3 mx-auto col-sm-5 mb-5 col-8 card-shadow card _stats">
			<h5 className="card-title text-center font-weight-bold mt-3">{props.no}</h5>
			<p className="card-text text-center font-weight-bold p-4">{props.description}</p>
		</div>
	);
};

class Stats extends Component {
	render() {
		const data = [
			{
				no: '300',
				description: 'No. of members',
			},
			{
				no: '4005',
				description: 'No.of visitors',
			},
			{
				no: '498',
				description: 'No. of diseases and pathy',
			},
		];

		const _html = [...data].map((x, key) => {
			return <Card key={key} no={x.no} description={x.description} />;
		});

		return (
			<div>
				<div className="mt-5 container">
					<div className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5 _stats">
						<div className="row">{_html}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Stats;
