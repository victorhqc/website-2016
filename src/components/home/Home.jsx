import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: '100%',
    };

    this.adjustSize = this.adjustSize.bind(this);
  }

  componentDidMount() {
    this.adjustSize();
  }

  componentWillMount() {
    window.addEventListener('resize', this.adjustSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustSize);
  }

  adjustSize() {
    const height = window.innerHeight;

    this.setState({ height });
  }

  render() {
    const { height } = this.state;

    const style = {
      height,
    };

    return (
      <div className="Home" style={style}>
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
    );
  }
}
