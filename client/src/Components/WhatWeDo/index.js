import React, { Component } from 'react';
import integrate from '../../Images/integrate.svg';
import testimonial from '../../Images/testimonials.svg';
import doctor from '../../Images/doctors.svg';
import Card from './Card';
import './Card.css';

class CardLayout extends Component {
	render() {
		const data = [
			{
				image: integrate,
				title: 'Integrate Solutions',
				description: 'Integrate solutions from all therapies',
			},
			{
				image: testimonial,
				title: 'Collect Testimonials',
				description: 'Collection of testimonials from all pathy',
			},
			{
				image: doctor,
				title: 'Good Doctors/Clinics',
				description: 'Let you know names of Good Doctors/ Clinics/ Hospitals',
			},
		];

		const _html = [...data].map((x, key) => {
			return <Card key={key} image={x.image} title={x.title} description={x.description} />;
		});

		return (
			<div>
				<div className="bg-white mt-5 container">
					<div className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5"> 
						<div className="row">{_html}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardLayout;
