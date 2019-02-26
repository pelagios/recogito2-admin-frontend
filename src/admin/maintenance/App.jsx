import React, { Component } from 'react';
import { render } from 'react-dom';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';
import RestoreBackup from './restore/RestoreBackup.jsx';
import PendingUploads from './pending_uploads/PendingUploads.jsx';

import './App.scss';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">System Maintenance</h1>

        <div className="panels">
          <RestoreBackup />
          <PendingUploads />
        </div>
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));