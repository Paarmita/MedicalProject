/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */

/* https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20 */
import React from 'react';
import diseaseData from '../../Data/DiseasesData';
import Card from './Card';
import Autocomplete from './Autocomplete';
import './style.css';

import Diabetes from '../../Images/Diseases/1.png';
import MultipleSclerosis from '../../Images/Diseases/2.png';
import Colitis from '../../Images/Diseases/3.png';
import Lupus from '../../Images/Diseases/4.png';
import Arthritis from '../../Images/Diseases/5.png';
import Asthma from '../../Images/Diseases/6.png';
import Celiac from '../../Images/Diseases/7.png';
import Polychondritis from '../../Images/Diseases/8.png';
import Scleroderma from '../../Images/Diseases/9.png';
import Liver from '../../Images/Diseases/10.png';
import Infectious from '../../Images/Diseases/11.png';
import Cancer from '../../Images/Diseases/12.png';
import Heart from '../../Images/Diseases/13.png';

const data = [
	{
		name: 'Diabetes',
		icon: Diabetes,
	},
	{
		name: 'Multiple Sclerosis',
		icon: MultipleSclerosis,
	},
	{
		name: "Crohn's & Colitis",
		icon: Colitis,
	},
	{
		name: 'Lupus',
		icon: Lupus,
	},
	{
		name: 'Rheumatoid Arthritis',
		icon: Arthritis,
	},
	{
		name: 'Allergies & Asthma',
		icon: Asthma,
	},
	{
		name: 'Celiac Disease',
		icon: Celiac,
	},
	{
		name: 'Relapsing Polychondritis',
		icon: Polychondritis,
	},
	{
		name: 'Scleroderma',
		icon: Scleroderma,
	},
	{
		name: 'Liver Disease',
		icon: Liver,
	},
	{
		name: 'Infectious Diseases',
		icon: Infectious,
	},
	{
		name: 'Cancer',
		icon: Cancer,
	},
	{
		name: 'Heart Disease',
		icon: Heart,
	},
];
class Diseases extends React.Component {
	constructor(props) {
		super(props);
		this.filteredData = this.filteredData.bind(this);
		this.state = {
			disease: data,
			filteredData: data,
		};
	}

	filteredData(filteredData) {
		this.setState({ filteredData });
	}

	render() {
		const html = this.state.filteredData.map((x, key) => (
			<Card key={key} image={x.icon} name={x.name} />
		));
		return (
			<div className="container">
				<div className="mt-2">
					<div>
						<h2 className="my-5">Diseases</h2>
					</div>
					<div>
						<Autocomplete
							filteredData={this.filteredData}
							suggestions={this.state.disease}
						/>
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

// https://bootsnipp.com/snippets/nNQyv
// https://reactjs.org/docs/lists-and-keys.html
