/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './NotFound.css';

export const Notfound = () => {
	return (
		<div className="notFound">
			<div className="c">
				<div className="_404">404</div>
				<div className="_1">THE PAGE</div>
				<div className="_2">WAS NOT FOUND</div>
				<a className="btn not_btn" href="/">
					BACK TO HOME
				</a>
			</div>
		</div>
	);
};
