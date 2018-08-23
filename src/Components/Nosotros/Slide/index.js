import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


let items = [
  {
    src: 'http://res.cloudinary.com/dqkikety1/image/upload/c_scale,h_400,q_89,w_1350/v1534985103/sliderTwo/3515.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://res.cloudinary.com/dqkikety1/image/upload/c_lfill,g_face:center,h_800,w_2700/v1534984752/sliderTwo/155595-OUESXX-84.jpg',
    altText: 'Slide 2',
    caption: 'Slide 1'
  },
  {
    src: 'http://res.cloudinary.com/dqkikety1/image/upload/c_fill,h_1000,w_3350/v1534984741/sliderTwo/148.jpg',
    altText: 'Slide 3',
    caption: 'Slide 1'
  }
]



class Slide extends Component {
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

  componentDidMount(){
    setInterval(()=>{
      this.next()
    }, 5000)
  }

  

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          style={{ color: 'black' }}
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img style={{ height: 'auto',width: '100%' }} src={item.src} alt={item.altText} />
          <CarouselCaption />
        </CarouselItem>
      );
    });

    return (
      <div style={{ height: '300px' }}>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>

    );
  }
}


export default Slide;
