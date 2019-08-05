/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './style.css';
// import data from '../../Data/DiseasesDetailData';
import Tabs from '../Settings/Tabs';
import Posts from '../Posts/Posts';

class DiseaseDetail extends React.Component {
	constructor(title) {
		super();
		this.title = title;
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="my-5 col-md-2">Migrane</h1>
					<div className=" my-5 col-md-10">
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
						<p>
							EmContrary to popular belief, Lorem Ipsum is not simply random text. It
							has roots in a piece of classical Latin literature from 45 BC, making it
							over 2000 years old. Richard McClintock, a Latin professor at
							Hampden-Sydney College in Virginia, looked up one of the more obscure
							Latin words, consectetur, from a Lorem Ipsum passage, and going through
							the cites of the word in classical literature, discovered the
							undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
							of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
							Cicero, written in 45 BC. This book is a treatise on the theory of
							ethics, very popular during the Renaissance. The first line of Lorem
							Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
							1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
							reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
							"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
							exact original form, accompanied by English versions from the 1914
							translation by H. Rackham.ail
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2">
						<h5>Best Therapy</h5>
					</div>
					<div className="col-md-10">
						<p>
							There are many variations of passages of Lorem Ipsum available, but the
							majority have suffered alteration in some form, by injected humour, or
							randomised words which don't look even slightly believable. If you are
							going to use a passage of Lorem Ipsum, you need to be sure there isn't
							anything embarrassing hidden in the middle of text. All the Lorem Ipsum
							generators on the Internet tend to repeat predefined chunks as
							necessary, making this the first true generator on the Internet. It uses
							a dictionary of over 200 Latin words, combined with a handful of model
							sentence structures, to generate Lorem Ipsum which looks reasonable. The
							generated Lorem Ipsum is therefore always free from repetition, injected
							humour, or non-characteristic words etc.
						</p>
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
