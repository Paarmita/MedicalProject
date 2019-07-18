/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
// https://bootsnipp.com/search?q=Card+List
import React from 'react';
import './style.css';

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<div className="container emp-profile">
					<div className="container-fluid mt-3 mb-4">
						<div className="col-lg-12">
							<div className="row">
								<div className="col-lg-12 px-0 pr-lg-2 mb-2 mb-lg-0">
									<div className="card border-light bg-white card">
										<div className="card-body ">
											<div className="col-lg-12 p-3 cardlist border-light shadow-sm _blogItem">
												<div className="col-lg-12">
													<div className="row">
														<div className="col-lg-11">
															<div className="row">
																<div className="col-4 col-lg-3 col-xl-2">
																	<div className="row">
																		<img
																			alt="profile name"
																			src="http://placehold.it/100x100"
																			className="mx-auto d-block _profileImg"
																		/>
																	</div>
																</div>
																<div className="col-8 col-lg-9 col-xl-10">
																	<div className="d-block mb-1">
																		<a
																			href="/#"
																			className="_blogItemName"
																		>
																			Name 1
																		</a>
																		<span className="d-block _blogItemTime">
																			Posted 3mon ago{' '}
																		</span>
																	</div>
																</div>
															</div>
															<div className="row">
																<h5 className="text-center col-lg-12 p-3">
																	{' '}
																	Title
																</h5>
																<p className="_blogItemDesc">
																	Lorem Ipsum is simply dummy text
																	of the printing and typesetting
																	industry. Lorem Ipsum has been
																	the industry's standard dummy
																	text ever since the 1500s, when
																	an unknown printer took a galley
																	of type and scrambled it to make
																	a type specimen book. It has
																	survived not only five
																	centuries, but also the leap
																	into electronic typesetting,
																	remaining essentially unchanged.
																	It was popularised in the 1960s
																	with the release of Letraset
																	sheets containing Lorem Ipsum
																	passages, and more recently with
																	desktop publishing software like
																	Aldus PageMaker including
																	versions of Lorem Ipsum.
																</p>
															</div>
														</div>
														<div className="col-lg-1 ml-lg-auto align-self-start mt-2 mt-lg-0">
															<div className="row">
																<div className="prostatus">
																	<span className="del-time">
																		Option
																	</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-12 p-3 cardlist border-light shadow-sm _blogItem">
												<div className="col-lg-12">
													<div className="row">
														<div className="col-lg-11">
															<div className="row">
																<div className="col-4 col-lg-3 col-xl-2">
																	<div className="row">
																		<img
																			alt="profile name"
																			src="http://placehold.it/100x100"
																			className="mx-auto d-block _profileImg"
																		/>
																	</div>
																</div>
																<div className="col-8 col-lg-9 col-xl-10">
																	<div className="d-block mb-1">
																		<a
																			href="/#"
																			className="_blogItemName"
																		>
																			Name 1
																		</a>
																		<span className="d-block _blogItemTime">
																			Posted 3mon ago{' '}
																		</span>
																	</div>
																</div>
															</div>
															<div className="row">
																<h5 className="text-center col-lg-12 p-3">
																	{' '}
																	Title
																</h5>
																<p>
																	Lorem Ipsum is simply dummy text
																	of the printing and typesetting
																	industry. Lorem Ipsum has been
																	the industry's standard dummy
																	text ever since the 1500s, when
																	an unknown printer took a galley
																	of type and scrambled it to make
																	a type specimen book. It has
																	survived not only five
																	centuries, but also the leap
																	into electronic typesetting,
																	remaining essentially unchanged.
																	It was popularised in the 1960s
																	with the release of Letraset
																	sheets containing Lorem Ipsum
																	passages, and more recently with
																	desktop publishing software like
																	Aldus PageMaker including
																	versions of Lorem Ipsum.
																</p>
															</div>
														</div>
														<div className="col-lg-1 ml-lg-auto align-self-start mt-2 mt-lg-0">
															<div className="row">
																<div className="prostatus">
																	<span className="del-time">
																		Option
																	</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
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

export default Dashboard;
