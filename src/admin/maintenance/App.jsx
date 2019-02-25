import React, { Component } from 'react';
import { render } from 'react-dom';

import './App.scss';

export default class App extends Component {

  render() {
    return (
      <div>Maintenance</div>
    );
  }

}

render(<App />, document.getElementById('app'));