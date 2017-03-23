import React from 'react';

import Slide from '../../../_reusable/slide';

import './Slide1.css';

export default function Slide1(props) {
  return (
    <Slide {...props}>
      <div className="slide-1">
        <h1>Slide 1</h1>
        <p>This should be rendered in the Home Page</p>
      </div>
    </Slide>
  );
}
