import React, { Component } from 'react';
import './Home.css';

import Slide1 from './children/slide1';
import Slide2 from './children/slide2';
import Slide3 from './children/slide3';

import {
  renderSlides,
} from '../_reusable/slide/helpers';

import background1 from './assets/IMG_20170209_153230.jpg';
import background2 from './assets/IMG_20170212_125335.jpg';
import background3 from './assets/IMG_20161204_151738.jpg';

const animationFrame = callback => setTimeout(callback, 1000 / 60);

const requestAnimFrame = () =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  animationFrame;

const slides = [
  <Slide3 backgroundImage={background3} />,
  <Slide2 backgroundImage={background2} />,
  <Slide1 backgroundImage={background1} />,
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

    this.setState({
      height,
      totalHeight: typeof height === 'number' ? (slides.length * height) : 0,
    });
  }

  updateElements() {
    this.setState({
      ticking: false,
    });
  }

  onScroll() {
    const {
      ticking,
      totalHeight,
    } = this.state;

    if (ticking) { return; }

    if (window.scrollY >= totalHeight) {
      window.scrollTo(0, totalHeight);
    }


    this.setState({
      ticking: true,
      scrollY: window.scrollY,
    });

    requestAnimFrame(this.updateElements());
  }

  render() {
    const {
      height,
      totalHeight,
    } = this.state;

    const renderedSlides = renderSlides(this.state, slides);

    const slideContainerStyle = {
      height: totalHeight + height,
    };

    return (
      <div className="Home">
        <div className="Home-intro">
          <div className="Home-description-container">
            <div className="Home-description">
              <div className="Home-logo">
                <h1>Generic</h1>
                {/* <h1>VQ</h1> */}
              </div>
              <div className="Home-body">
                <h1>
                  Some Generic page <br />
                  {/* Victor Hugo Quiroz Castro <br /> */}
                  <small>
                    Some generic subtitle
                    {/* FullStack JavaScript  Developer */}
                  </small>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="Home-slides" style={slideContainerStyle}>
          { renderedSlides }
        </div>
      </div>
    );
  }
}
