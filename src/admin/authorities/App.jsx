import React, { Component } from 'react';
import { render } from 'react-dom';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';

import './App.scss';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">Entity Management</h1>        
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));