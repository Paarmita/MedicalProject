/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* https://codepen.io/alexdevero/pen/rzqxpG */
// https://bootsnipp.com/snippets/BxA1B
import React, { Component } from 'react';
import './style.css';

class CarouselLeftArrow extends Component {
	render() {
		return (
			<a
				href="/#"
				className="carousel__arrow carousel__arrow--left"
				onClick={this.props.onClick}
			>
				<span className="fa fa-2x fa-angle-left" />
			</a>
		);
	}
}

class CarouselRightArrow extends Component {
	render() {
		return (
			<a
				href="/#"
				className="carousel__arrow carousel__arrow--right"
				onClick={this.props.onClick}
			>
				<span className="fa fa-2x fa-angle-right" />
			</a>
		);
	}
}

class CarouselIndicator extends Component {
	render() {
		return (
			<li>
				<a
					className={
						this.props.index === this.props.activeIndex
							? 'carousel__indicator carousel__indicator--active'
							: 'carousel__indicator'
					}
					onClick={this.props.onClick}
				/>
			</li>
		);
	}
}

class CarouselSlide extends Component {
	render() {
		return (
			<li
				className={
					this.props.index === this.props.activeIndex
						? 'carousel__slide carousel__slide--active'
						: 'carousel__slide'
				}
			>
				<p className="carousel-slide__content">{this.props.slide.content}</p>
				<p>
					<strong className="carousel-slide__author">{this.props.slide.author}</strong>
				</p>
				<p>
					<small className="carousel-slide__source">{this.props.slide.source}</small>
				</p>
			</li>
		);
	}
}

// Carousel wrapper component
class Testimonial extends Component {
	constructor(props) {
		super(props);

		this.goToSlide = this.goToSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
		this.goToNextSlide = this.goToNextSlide.bind(this);

		this.state = {
			activeIndex: 0,
		};
	}

	goToSlide(index) {
		this.setState({
			activeIndex: index,
		});
	}

	goToPrevSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		const { slides } = this.props;
		const slidesLength = slides.length;

		if (index < 1) {
			index = slidesLength;
		}

		index -= 1;

		this.setState({
			activeIndex: index,
		});
	}

	goToNextSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		const { slides } = this.props;
		const slidesLength = slides.length - 1;

		if (index === slidesLength) {
			index = -1;
		}

		index += 1;

		this.setState({
			activeIndex: index,
		});
	}

	render() {
		return (
			<div className="carousel">
				<CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

				<ul className="carousel__slides">
					{this.props.slides.map((slide, index) => (
						<CarouselSlide
							key={index}
							index={index}
							activeIndex={this.state.activeIndex}
							slide={slide}
						/>
					))}
				</ul>

				<CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

				<ul className="carousel__indicators">
					{this.props.slides.map((slide, index) => (
						<CarouselIndicator
							key={index}
							index={index}
							activeIndex={this.state.activeIndex}
							isActive={this.state.activeIndex === index}
							onClick={() => this.goToSlide(index)}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default Testimonial;
