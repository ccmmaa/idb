import React, { Component } from 'react';
import Carousel from '../assets/reactstrap-master/src/Carousel';
import CarouselItem from '../assets/reactstrap-master/src/CarouselItem';
import CarouselControl from '../assets/reactstrap-master/src/CarouselControl';
import CarouselIndicators from '../assets/reactstrap-master/src/CarouselIndicators';
import CarouselCaption from '../assets/reactstrap-master/src/CarouselCaption';
import Button from '../assets/reactstrap-master/src/Button';
import carousel1 from '../assets/images/carousel1.jpg';
import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';
import carousel4 from '../assets/images/carousel4.jpg';
import '../assets/css/carousel.css';

class MyCarousel extends Component {

	constructor(props) {
		super(props);
		this.state = { activeIndex: 0,
			carouselItems: [
				{
					model: 'Songs',
					first: 'Search',
					description: 'your city\'s top songs.',
					image: carousel1
				},
				{
					model: 'Artists',
					first: 'Explore',
					description: 'your favorite artists.',
					image: carousel2
				},
				{
					model: 'Albums',
					first: 'Discover',
					description: 'new albums.',
					image: carousel3
				},
				{
					model: 'Cities',
					first: 'Connect',
					description: 'with your city.',
					image: carousel4
				}
			]
		};
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === this.state.carouselItems.length - 1? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? this.state.carouselItems.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = this.state.carouselItems.map((item) => {
			if(item.model === "Songs")
				return (
					<CarouselItem
						onExiting={this.onExiting}
						onExited={this.onExited}
						key={item.image}
					>
						<img width='100%' height={600} src={item.image} alt="image not found" />
						<CarouselCaption className="carousel-caption-left" captionText={<Button className="carousel-button" href={item.model} color="primary" size="lg">{item.model}</Button>} captionHeader={<div className="caption-header"><span>{item.first}</span> {item.description}</div>} />
					</CarouselItem>
				);
			else if(item.model === "Cities")
				return (
					<CarouselItem
						onExiting={this.onExiting}
						onExited={this.onExited}
						key={item.image}
					>
						<img width='100%' height={600} src={item.image} alt="image not found" />
						<CarouselCaption className="carousel-caption-right" captionText={<Button className="carousel-button" href={item.model} color="primary" size="lg">{item.model}</Button>} captionHeader={<div className="caption-header"><span>{item.first}</span> {item.description}</div>} />
					</CarouselItem>
				);
			else if(item.model === "Artists" || item.model === "Albums")
				return (
					<CarouselItem
						onExiting={this.onExiting}
						onExited={this.onExited}
						key={item.image}
					>
						<img width='100%' height={600} src={item.image} alt="image not found" />
						<CarouselCaption className="carousel-caption" captionText={<Button className="carousel-button" href={item.model} color="primary" size="lg">{item.model}</Button>} captionHeader={<div className="caption-header"><span>{item.first}</span> {item.description}</div>} />
					</CarouselItem>
				);
		});

		return (
			<Carousel
				activeIndex={activeIndex}
				next={this.next}
				previous={this.previous}
			>
				<CarouselIndicators className="carousel-indicators" items={this.state.carouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
				{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
			</Carousel>
		);
	}
}
export default MyCarousel;
