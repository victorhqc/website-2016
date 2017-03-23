import React from 'react';

import Slide from '../../../_reusable/slide';

import './Slide3.css';

export default function Slide3(props) {
  return (
    <Slide {...props}>
      <div className="slide-3">
        <h1>Slide 3</h1>
        <p>Slide No. 3!</p>
      </div>
    </Slide>
  );
}
