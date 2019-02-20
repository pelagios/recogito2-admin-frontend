import React, { Component } from 'react';
import { render } from 'react-dom';

import NavigationMenu from '../../common/components/NavigationMenu.jsx';

import '../../common/styles/layout.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavigationMenu />
        <h1 className="page-title">User Management</h1>
      </div>
    );
  }

}

render(<App />, document.getElementById('app'));