/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-loop-func */
/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './style.css';
import fakeData from './Diseasedetaildata';
import Tabs from '../Settings/Tabs';
import Posts from '../Posts/Posts';

class DiseaseDetail extends React.Component {
	constructor(title) {
		super();
		this.title = title;
	}

	render() {
		const { id } = this.props.match.params;
		let test = {};
		for (var i = 0; i < fakeData.length; i++) {
			Object.keys(fakeData[i]).forEach(function(key) {
				if (key == id) {
					const stringID = id.toString();
					test = fakeData[i][stringID];
				}
			});
		}
		return (
			<div className="container">
				<div className="row">
					<h1 className="my-5 col-md-8">
						{test.Disease}- {test.Name}
					</h1>
					<div className=" my-5 col-md-4">
						<button
							type="button"
							className="btn btn-info float-right"
							href="https://en.wikipedia.org/wiki/Migraine"
						>
							Read More
						</button>
					</div>
				</div>

				<div className="row">
					<div className="col-md-2">
						<h5>Description </h5>
					</div>
					<div className="col-md-10">
						<p>{test.Description}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2">
						<h5>Best Therapy</h5>
					</div>
					<div className="col-md-10">
						<p>{test.BestTherapy}</p>
					</div>
				</div>

				<Tabs>
					Allopathy
					<span>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Efficiency </h6>
							</div>
							<div className="col-md-12">
								<p>{test.Allopathy.Efficiency}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Advantages</h6>
							</div>
							<div className="col-md-12">
								<p>{test.Allopathy.Advantages}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Disadvantages</h6>
							</div>
							<div className="col-md-12">
								<p>{test.Allopathy.Disadvantages}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Summary</h6>
							</div>
							<div className="col-md-12">
								<p>{test.Allopathy.Summary}</p>
							</div>
						</div>
						{/* <div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Ratings</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div> */}
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Good doctors,Clinics,Hospitals</h6>
							</div>
							<div className="col-md-12">
								<p>{test.Allopathy.Suggestions}</p>
							</div>
						</div>
					</span>
					Homeopathy
					<span>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Efficiency </h6>
							</div>
							<div className="col-md-12">
								<p>
									EmContrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature from
									45 BC, making it over 2000 years old. Richard McClintock, a
									Latin professor at Hampden-Sydney College in Virginia, looked up
									one of the more obscure Latin words, consectetur, from a Lorem
									Ipsum passage, and going through the cites of the word in
									classical literature, discovered the undoubtable source. Lorem
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Advantages</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Disadvantages</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Summary</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Ratings</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Good doctors,Clinics,Hospitals</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
					</span>
					Ayurveda
					<span>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Efficiency </h6>
							</div>
							<div className="col-md-12">
								<p>
									EmContrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature from
									45 BC, making it over 2000 years old. Richard McClintock, a
									Latin professor at Hampden-Sydney College in Virginia, looked up
									one of the more obscure Latin words, consectetur, from a Lorem
									Ipsum passage, and going through the cites of the word in
									classical literature, discovered the undoubtable source. Lorem
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Advantages</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Disadvantages</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Summary</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Ratings</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Good doctors,Clinics,Hospitals</h6>
							</div>
							<div className="col-md-12">
								<p>
									There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even
									slightly believable.
								</p>
							</div>
						</div>
					</span>
				</Tabs>
				<h2>Related Posts</h2>
				<Posts />
			</div>
		);
	}
}
export default DiseaseDetail;
