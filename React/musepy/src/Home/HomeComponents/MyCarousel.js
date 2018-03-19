import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Button
} from 'reactstrap';

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
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
    const nextIndex = this.state.activeIndex === this.props.carouselItems.length - 1? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.carouselItems.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.carouselItems.map((item) => {
      if(item.model === "Songs")
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.image}
          >
            <img width='100%' height={600} src={item.image} alt="image not found" />
            <CarouselCaption className="carousel-caption-left" captionText={<Button className="carousel-button" color="primary" size="lg">{item.model}</Button>} captionHeader={<div className="caption-header"><span>{item.first}</span> {item.description}</div>} />
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
            <CarouselCaption className="carousel-caption-right" captionText={<Button className="carousel-button" color="primary" size="lg">{item.model}</Button>} captionHeader={<div className="caption-header"><span>{item.first}</span> {item.description}</div>} />
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
            <CarouselCaption className="carousel-caption" captionText={<Button className="carousel-button" color="primary" size="lg">{item.model}</Button>} captionHeader={<div className="caption-header"><span>{item.first}</span> {item.description}</div>} />
          </CarouselItem>
        );
    });

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {/*<CarouselIndicators items={this.props.carouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />*/}
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}


export default MyCarousel;
