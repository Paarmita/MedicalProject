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

const html = [...diseaseData].map((x, key) => <Card key={key} image={x.icon} name={x.name} />);
class Diseases extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="mt-2">
					<div>
						<h1 className="diseases_title">Diseases</h1>
					</div>
					<div>
						<Autocomplete
							suggestions={[
								'Diabetes',
								'Multiple Sclerosis',
								"Crohn's & Colitis",
								'Lupus',
								'Rheumatoid Arthritis',
								'Allergies & Asthma',
								'Celiac Disease',
								'Relapsing Polychondritis',
								'Scleroderma',
								'Liver Disease',
								'Infectious Diseases',
								'Cancer',
								'Heart Disease',
							]}
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
