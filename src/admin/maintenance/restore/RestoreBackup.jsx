import React, { Component } from 'react';
import axios from 'axios';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';
import FileField from '../../../common/components/form/FileField.jsx';

import './RestoreBackup.scss';

export default class RestoreBackup extends Component {

  state = {
    file: null,
    successMessage: null,
    errorMessage: null
  }

  handleAttachBackup = (f) => {
    this.setState({ file: f }, () => this.handleRestoreBackup());
  }

  handleRestoreBackup = () => {
    const formdata = new FormData();
    formdata.append('backup', this.state.file);

    const config =  { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post('/admin/restore', formdata,  config)
      .then(result => {
        this.setState({ successMessage: 'Ok.' });
      })
      .catch(error => {
        this.setState({ errorMessage: `Error: ${error.response.statusText}` });
      });    
  }

  render() {
    return (
      <FoldablePanel title="Restore Document Backup">
        <form 
          ref={el => this._form = el}
          className="crud restore-backup" 
          onSubmit={this.handleRestoreBackup}>

          <div className="instructions">
            Restore a document from a ZIP backup package. Unlike the
            normal <strong>Restore</strong> feature, which is available to every user, this Admin version 
            allows you to: 
          
            <ul>
              <li>restore <strong>modified</strong> backup packages</li>
              <li>restore to any users' workspace - just modify the owner metadata in the ZIP accordingly</li>
            </ul>
          </div>

          <FileField
            name="file"
            buttonOnly
            label="Upload ZIP backup package"
            onChange={this.handleAttachBackup}
            buttonClass="btn add-file" />

          {this.state.successMessage && <span className="success message">{this.state.successMessage}</span> }
          {this.state.errorMessage && <span className="error message">{this.state.errorMessage}</span> }
        </form>
      </FoldablePanel>
    );
  }

}
