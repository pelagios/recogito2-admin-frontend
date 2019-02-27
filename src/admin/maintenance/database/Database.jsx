import React, { Component } from 'react';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

export default class Database extends Component {

  render() {
    return (
      <FoldablePanel
        className="database"
        title="Database">

        <div className="instructions">
          Recogito stores the following data in the database:
          <ul>
            <li>User account information</li>
            <li>User folder hierarchies</li>
            <li>Document metadata</li> 
            <li>Document sharing information</li>
            <li>Auxiliary information such as authority file metadata, georesolution and NER task progress, etc.</li>
          </ul>
          Make sure you perform regular backups of your database. Instructions for set up backups 
          are <a href="https://github.com/pelagios/recogito2/wiki/Notes-on-Postgres-backup" target="_blank" rel="noopener noreferrer">here</a>.
        </div>

      </FoldablePanel>
    );
  }

}
