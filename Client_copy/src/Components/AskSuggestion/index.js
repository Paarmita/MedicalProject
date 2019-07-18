/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './style.css';

const controlCss = {
	marginRight: '40px',
};

class AskSuggestion extends Component {
	render() {
		return (
			<div>
				<div className="container signIn main">
					<div className="row">
						<div className="col-sm-9 col-md-12 col-lg-12 mx-auto">
							<div className="card card-signin my-5">
								<div className="card-body">
									<h3 className="card-title text-center">
										<strong>Ask Suggestion</strong>
									</h3>
									<p className="card-text text-center">
										Ask suggestions from the community on the experience you had
										with some disease and get some efficient treatment for it 😀
									</p>
									<form>
										<div className="form-group">
											<label htmlFor="title_id" className="control-label">
												Title
											</label>
											<input
												type="text"
												className="form-control"
												id="title_id"
												name="title"
												placeholder="Title of the Content"
											/>
										</div>

										<div className="form-group">
											<label htmlFor="desc_id" className="control-label">
												Description
											</label>
											<input
												type="text"
												className="form-control"
												id="desc_id"
												name="desc"
												placeholder="Short 2 line description of the whole content"
											/>
										</div>
										<div className="form-group">
											<label
												htmlFor="desc_id"
												className="control-label"
												style={controlCss}
											>
												Post as
											</label>
											<div className="form-check form-check-inline">
												<input
													className="form-check-input"
													type="radio"
													name="inlineRadioOptions"
													id="inlineRadio1"
													value="Name"
												/>
												<label
													className="form-check-label"
													htmlFor="form-control inlineRadio1"
												>
													Name
												</label>
											</div>
											<div className="form-check form-check-inline">
												<input
													className="form-check-input"
													type="radio"
													name="inlineRadioOptions"
													id="inlineRadio2"
													value="option2"
												/>
												<label
													className="form-check-label"
													htmlFor="inlineRadio2"
												>
													Anonymous
												</label>
											</div>
											<small id="emailHelp" className="form-text text-muted">
												For Anonymous, your identity will be kept secret
											</small>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlFile1">Tags</label>
											<select
												className="form-control"
												id="exampleFormControlSelect1"
											>
												<option>Cancer</option>
												<option>Malaria</option>
												<option>Arythmia</option>
												<option>Heart Disease</option>
												<option>lung Disease</option>
											</select>

											<small id="emailHelp" className="form-text text-muted">
												Choose tags for Allergy, Disease from the list if
												other enter them in the box
											</small>
											<input
												type="text"
												value="Any"
												data-role="tagsinput"
												className="form-control"
												id="title_id"
												name="title"
												placeholder="Add new value if not mentioned above"
											/>
										</div>

										<div className="form-group">
											<label htmlFor="exampleFormControlFile1">
												Upload Reports/documents
											</label>
											<input
												type="file"
												className="form-control-file"
												id="exampleFormControlFile1"
											/>
											<small id="emailHelp" className="form-text text-muted">
												You can add folders, pdf, images jpg, png, gif
											</small>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea1">
												Treatment Taken
											</label>
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="2"
												placeholder="Final Treatment taken"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea1">
												Detailed Description
											</label>
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
												placeholder="Detailed description of the whole case giving example for all the treatment taken and past history of the patient"
											/>
										</div>
										<div className="form-group">
											<label
												htmlFor="desc_id"
												className="control-label"
												style={controlCss}
											>
												Would you like to post any further updates in future
											</label>
											<div className="form-check form-check-inline">
												<input
													className="form-check-input"
													type="radio"
													name="inlineRadioOptions"
													id="inlineRadio1"
													value="Name"
												/>
												<label
													className="form-check-label"
													htmlFor="form-control inlineRadio1"
												>
													Yes
												</label>
											</div>
											<div className="form-check form-check-inline">
												<input
													className="form-check-input"
													type="radio"
													name="inlineRadioOptions"
													id="inlineRadio2"
													value="option2"
												/>
												<label
													className="form-check-label"
													htmlFor="inlineRadio2"
												>
													No
												</label>
											</div>
											<small id="emailHelp" className="form-text text-muted">
												If yes, you will be updated after some time to post
												the update
											</small>
										</div>

										<div className="form-group">
											<div className="col text-center">
												<button
													type="submit"
													className="btn btn-primary btn-lg"
												>
													Post
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
export default AskSuggestion;
