/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.css';

const range = (min, max) =>
	Array(max - min + 1)
		.fill()
		.map((_, i) => min + i);

const RatingItem = ({ checked, colored, onChange, value }) => (
	<label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
		<input
			checked={checked}
			className="rating__input"
			onChange={_e => onChange(value)}
			type="radio"
			value={value}
		/>
	</label>
);

const Rating = ({ min, max, onChange, value }) => {
	return (
		<div className="rating">
			{range(min, max).map(item => (
				<RatingItem
					colored={value >= item}
					checked={value === item}
					value={item}
					onChange={onChange}
				/>
			))}
		</div>
	);
};

class AddTestimonial extends Component {
	constructor() {
		super();

		this.state = { rating: 0 };
	}

	render() {
		return (
			<div>
				<div className="container signIn main">
					<div className="row">
						<div className="col-sm-9 col-md-12 col-lg-12 mx-auto">
							<div className="card card-signin my-5">
								<div className="card-body">
									<h3 className="card-title text-center">
										<strong>Add Testimonial</strong>
									</h3>
									<p className="card-text text-center">
										Share you experience with our community. Your feedback is
										important 😀
									</p>
									<form>
										<div className="form-group text-center">
											<label htmlFor="title_id" className="control-label">
												Rate our website
											</label>
										</div>
										<div className="form-group text-center">
											<Rating
												min={1}
												max={5}
												onChange={rating => this.setState({ rating })}
												value={this.state.rating}
											/>
										</div>
										<div className="form-group">
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="5"
												placeholder="Enter you feedback here"
											/>
										</div>
										<div className="form-group">
											<div className="col text-center">
												<button
													type="submit"
													className="btn btn-primary btn-lg"
												>
													Post Feedback
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default AddTestimonial;
