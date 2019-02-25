import React, { Component } from 'react';
import { render } from 'react-dom';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';
import FoldablePanel from '../../common/components/panel/FoldablePanel.jsx';

import './App.scss';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">System Maintenance</h1>

        <div className="panels">
          <FoldablePanel title="Document Backup & Restore" />
        </div>
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));