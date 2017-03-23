import React from 'react';

import Slide from '../../../_reusable/slide';

import './Slide2.css';

export default function Slide2(props) {
  return (
    <Slide {...props}>
      <div className="slide-2">
        <h1>Slide 2</h1>
        <p>This should also be rendered in the Home Page</p>
      </div>
    </Slide>
  );
}
