import React from 'react';
import './style.css';

class Tabs extends React.Component {
	constructor() {
		super();
		this.state = {
			active: 0,
		};
	}

	select = i => {
		const _this = this;
		return function() {
			_this.setState({
				active: i,
			});
		};
	};

	renderTabs = () => {
		return React.Children.map(this.props.children, (item, i) => {
			if (i % 2 === 0) {
				const active = this.state.active === i ? 'active' : '';
				return (
					<a onClick={this.select(i)} className={`${active} tab`}>
						{item}
					</a>
				);
			}
		});
	};

	renderContent() {
		return React.Children.map(this.props.children, (item, i) => {
			if (i - 1 === this.state.active) {
				return <div className="content">{item}</div>;
			}
		});
	}

	render() {
		return (
			<div className="tabs">
				{this.renderTabs()}
				{this.renderContent()}
			</div>
		);
	}
}
export default Tabs;
