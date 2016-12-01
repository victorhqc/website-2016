import React, { Component, PropTypes } from 'react';
import './App.css';

class App extends Component {

  render() {
    const { children } = this.props;

    console.log('children', children);

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
          { children }
        </div>
        <footer className="App-footer">
        </footer>
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
