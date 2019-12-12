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
// import data from '../../Data/DiseasesData';
import Card from './Card';
import Autocomplete from './Autocomplete';
import Cancer from '../../Images/Diseases/1.png';
import './style.css';

const data = [

	{
		name: 'Arthritis',
		icon: Cancer,
		type: [
			{ title: { id: 21, name: 'Childhood Arthritis' } },
			{ title: { id: 22, name: 'Fibromyalgia' } },
			{ title: { id: 23, name: 'Gout' } },
			{ title: { id: 24, name: 'Osteoarthritis (OA)' } },
			{ title: { id: 25, name: 'Rheumatoid Arthritis (RA)' } },
		],
	},

	{
		name: 'Eye, Ear, Nose and Throat',
		icon: Cancer,
		type: [
			{ title: { id: 41, name: 'Hearing Loss ' } },
			{ title: { id: 42, name: ' Glaucoma ' } },
			{ title: { id: 43, name: 'Macular Degeneration' } },
		],
	},
	{
		name: 'Digestive and Intestinal',
		icon: Cancer,
		type: [
			{ title: { id: 51, name: "Crohn's Disease" } },
			{ title: { id: 52, name: 'Ulcerative Colitis' } },
			{ title: { id: 53, name: 'IBS' } },
		],
	},
	{
		name: 'Cancer',
		icon: Cancer,
		type: [
			{ title: { id: 61, name: 'Breast' } },
			{ title: { id: 62, name: 'Lungs' } },
			{ title: { id: 63, name: 'Prostate' } },
			{ title: { id: 64, name: 'Skin' } },
			{ title: { id: 65, name: 'Blood' } },
		],
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
		const html = this.state.filteredData.map((x, key) => <Card key={key} data={x} />);
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
