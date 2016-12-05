import React, { Component } from 'react';
import './Home.css';

import Slide1 from './children/slide1';

const animationFrame = callback => setTimeout(callback, 1000 / 60);

const requestAnimFrame = () =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  animationFrame;

const renderSlides = style => [
  <Slide1 style={style} key="slide-1"/>,
];

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: '100%',
      ticking: false,
      scrollY: 0,
    };

    this.adjustSize = this.adjustSize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.updateElements = this.updateElements.bind(this);
  }

  componentDidMount() {
    this.adjustSize();
  }

  componentWillMount() {
    window.addEventListener('resize', this.adjustSize);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustSize);
    window.removeEventListener('scroll');
  }

  adjustSize() {
    const height = window.innerHeight;

    this.setState({ height });
  }

  updateElements() {
    const { scrollY } = this.state;

    // console.log('scroll', scrollY);

    this.setState({
      ticking: false,
    });
  }

  onScroll() {
    const { ticking } = this.state;

    if (ticking) { return; }


    this.setState({
      ticking: true,
      scrollY: window.scrollY,
    });

    requestAnimFrame(this.updateElements());
  }

  render() {
    const { height } = this.state;

    const style = {
      height,
    };

    const slides = renderSlides(style);

    const slideStyle = {
      height: typeof height === 'number' ? height * (slides.length + 1) : height,
    };

    return (
      <div className="Home" style={style}>
        <div className="Home-intro">
          <div className="Home-description-container">
            <div className="Home-description">
              <div className="Home-logo">
                <h1>VQ</h1>
              </div>
              <div className="Home-body">
                <h1>
                  Victor Quiroz Castro <br />
                  <small>
                    FullStack JavaScript  Developer
                  </small>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="Home-slides" style={slideStyle}>
          { slides }
        </div>
      </div>
    );
  }
}
