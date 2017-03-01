import React, { Component } from 'react';
import './Home.css';

import Slide1 from './children/slide1';
import Slide2 from './children/slide2';
import Slide3 from './children/slide3';

const animationFrame = callback => setTimeout(callback, 1000 / 60);

const requestAnimFrame = () =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  animationFrame;

const slides = [
  <Slide3 />,
  <Slide2 />,
  <Slide1 />,
];

const calculateStyle = ({
  zIndex,
  height,
  halfHeight,
  nextTransform,
  scroll,
}) => {
  if (scroll <= 0) {
    return {
      display: 'none',
    };
  }

  if (scroll >= halfHeight) {
    return {
      height,
      zIndex,
      position: 'fixed',
      top: 0,
    };
  }

  return {
    height,
    zIndex,
    transform: `translate3d(0, ${nextTransform}px, 0)`,
  };
};

const renderSlides = (state) => {
  const {
    height,
    totalHeight,
    scrollY,
  } = state;

  const halfHeight = height / 2;

  return slides.reduce((visible, slide, index) => {
    const zIndex = slides.length - index;
    const nextTransform = (totalHeight - (height * index)) - scrollY;
    const scroll = scrollY - (halfHeight * (zIndex - 1));

    const style = calculateStyle({
      zIndex,
      height,
      halfHeight,
      nextTransform,
      scroll,
    });

    return [
      ...visible,
      React.cloneElement(
        slide,
        {
          key: `slide-${index}`,
          style,
          nextTransform,
          halfHeight,
          scroll,
        },
      ),
    ];
  }, []);
};

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
      totalHeight: typeof height === 'number' ? height * slides.length : height,
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

    if (window.scrollY >= totalHeight / 2) {
      window.scrollTo(0, totalHeight / 2);
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

    const style = {
      height,
    };

    const renderedSlides = renderSlides(this.state);

    const slideContainerStyle = {
      height: totalHeight - height,
    };

    return (
      <div className="Home" style={style}>
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
