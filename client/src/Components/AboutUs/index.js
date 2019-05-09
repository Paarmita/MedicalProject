/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './style.css';

class AboutUs extends React.Component {
	render() {
		return (
			<div className="container">
				<h1 className="my-4 aboutTitle text-center">About Us</h1>
				<div className="row mbr-justify-content-center">
					<div className="col-lg-6 mbr-col-md-10">
						<div className="wrap">
							<div className="ico-wrap">
								<span className="mbr-iconfont fa-volume-up fa" />
							</div>
							<div className="text-wrap vcenter">
								<h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
									Provide solutions
								</h2>
								<p className="mbr-fonts-style text1 mbr-text display-6">
									Integrate solutions from all therapies and provide an effective
									solution to the disease
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mbr-col-md-10">
						<div className="wrap">
							<div className="ico-wrap">
								<span className="mbr-iconfont fa-calendar fa" />
							</div>
							<div className="text-wrap vcenter">
								<h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
									Collection of Testimonials
								</h2>
								<p className="mbr-fonts-style text1 mbr-text display-6">
									Collect a large number of testimonials from people and search
									from different sources
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mbr-col-md-10">
						<div className="wrap">
							<div className="ico-wrap">
								<span className="mbr-iconfont fa-globe fa" />
							</div>
							<div className="text-wrap vcenter">
								<h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
									Search for good therapists
								</h2>
								<p className="mbr-fonts-style text1 mbr-text display-6">
									Let you know names of good Doctors/Hospitals/ Clinics and People
									who cure certain kind of diseases
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mbr-col-md-10">
						<div className="wrap">
							<div className="ico-wrap">
								<span className="mbr-iconfont fa-trophy fa" />
							</div>
							<div className="text-wrap vcenter">
								<h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
									Achieve <span>Your Targets</span>
								</h2>
								<p className="mbr-fonts-style text1 mbr-text display-6">
									Gives truthful result about diseases and its treatment.
									<span> Non-commercial service to humanity </span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="testimonials text-center">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div className="card border-light bg-light text-center">
									<i
										className="fa fa-quote-left fa-3x card-img-top rounded-circle"
										aria-hidden="true"
									/>
									<div className="card-body blockquote">
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer bibendum enim eu nibh finibus
										</p>
										<footer className="blockquote-footer">
											<cite title="Source Title">Mohamed Nady</cite>
										</footer>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-4">
								<div className="card border-light bg-light text-center">
									<i
										className="fa fa-quote-left fa-3x card-img-top rounded-circle"
										aria-hidden="true"
									/>
									<div className="card-body blockquote">
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer bibendum enim eu nibh finibus
										</p>
										<footer className="blockquote-footer">
											<cite title="Source Title">Mohamed Reda</cite>
										</footer>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-4">
								<div className="card border-light bg-light text-center">
									<i
										className="fa fa-quote-left fa-3x card-img-top rounded-circle"
										aria-hidden="true"
									/>
									<div className="card-body blockquote">
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer bibendum enim eu nibh finibus
										</p>
										<footer className="blockquote-footer">
											<cite title="Source Title">Mohamed Atef</cite>
										</footer>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;
