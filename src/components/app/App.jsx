import React, { Component, PropTypes } from 'react';
import './App.css';

class App extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <header className="App-header" />
        <div className="App-body">
          { children }
        </div>
        <footer className="App-footer" />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default App;
