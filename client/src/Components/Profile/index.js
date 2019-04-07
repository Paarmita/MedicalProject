/* eslint-disable import/named */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import data from './Data';
import './style.css';
import DashboardHeader from '../DashboardNavbar/DashboardHeader';

const html = [...data].map(profile => (
	<div className="container emp-profile main">
		<form>
			<div className="row">
				<div className="col-md-4">
					<div className="profile-img">
						<img src={profile.profile_pic} alt="profile pic" />
						<div className="file btn btn-lg btn-primary">
							Change Photo
							<input type="file" name="file" />
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="profile-head">
						<h5>{profile.full_name}</h5>
						<h6>@{profile.username}</h6>
						<p className="proile-rating">
							<span>{profile.bio}</span>
						</p>
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="home-tab"
									data-toggle="tab"
									href="#home"
									role="tab"
									aria-controls="home"
									aria-selected="true"
								>
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="profile-tab"
									data-toggle="tab"
									href="#profile"
									role="tab"
									aria-controls="profile"
									aria-selected="false"
								>
									Timeline
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-2">
					<input
						type="submit"
						className="profile-edit-btn"
						name="btnAddMore"
						value="Edit Profile/Report Profile"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4" />
				<div className="col-md-8">
					<div className="tab-content profile-tab" id="myTabContent">
						<div
							className="tab-pane fade show active"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab"
						/>
						<div className="row">
							<div className="col-md-6">
								<label>Email</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.email}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Phone</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.phoneno}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Age</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.age}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Gender</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.gender}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Location</label>
							</div>
							<div className="col-md-6">
								<p>
									{profile.location.city},{profile.location.state},
									{profile.location.country}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Birthday</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.birthday}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
));
class Profile extends React.Component {
	render() {
		return (
			<div>
				<DashboardHeader />
				{html}
			</div>
		);
	}
}
export default Profile;
