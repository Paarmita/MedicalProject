/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './style.css';

class Notfound extends React.Component {
	render() {
		return (
			<div className="notFound">
				<div className="c">
					<div className="_2">Terms of Use</div>
					<div className="_2">
						Putting patients first is one of our founding principles, and that includes
						being open and transparent about how your data is collected, shared, and
						used. But sometimes, formal legal text can be hard to read and fully
						understand, so here we wanted to lay our privacy policy out in a simpler
						way. If you want more details as you’re reading, the corresponding parts of
						the full Privacy Policy will be available below each section, just click
						‘Show legal text’.
					</div>
					<div className="_2">
						We may change our Privacy Policy at any time and will always post changes
						here on the website. If you have any questions or comments about our Privacy
						Policy, please let us know.
					</div>
				</div>
			</div>
		);
	}
}

export default Notfound;
