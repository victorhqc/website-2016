import React, { PureComponent, PropTypes } from 'react';
import './App.css';

class App extends PureComponent {

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

App.defaultProps = {
  children: {},
};

export default App;
