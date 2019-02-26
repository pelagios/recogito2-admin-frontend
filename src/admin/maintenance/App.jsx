import React, { Component } from 'react';
import { render } from 'react-dom';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';
import RestoreBackup from './restore/RestoreBackup.jsx';
import PendingUploads from './pending_uploads/PendingUploads.jsx';
import Database from './database/Database.jsx';
import Filestore from './filestore/Filestore.jsx';
import ElasticSearch from './elasticsearch/ElasticSearch.jsx';
import Logs from './logs/Logs.jsx';

import './App.scss';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">System Maintenance</h1>

        <div className="panels">
          <PendingUploads />
          <Filestore />
          <Database />
          <ElasticSearch />
          <Logs />
          <RestoreBackup />
        </div>
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));