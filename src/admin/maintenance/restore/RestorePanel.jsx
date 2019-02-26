import React, { Component } from 'react';
import axios from 'axios';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';
import FileField from '../../../common/components/form/FileField.jsx';

import './RestorePanel.scss';

export default class App extends Component {

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
    formdata.append('file', this.state.file);

    axios.post('/admin/restore', formdata)
    .then(result => {
      this.setState({ successMessage: 'Ok.' });
    })
    .catch(error => {
      this.setState({ errorMessage: `Error: ${error.response.statusText}` });
    });    
  }

  render() {
    return (
      <FoldablePanel title="Document Restore - Admin Version">
        <form 
          ref={el => this._form = el}
          className="crud restore-backup" 
          onSubmit={this.handleRestoreBackup}>

          <p className="instructions">
            Restore a ZIP backup package created via the document backup feature. Unlike the normal 
            Restore feature, which is available to every user, the Admin version allows you to: 
            i) restore modified backup packages, ii) restore to any users' workspace. (Just modify the 
            owner metadata in the ZIP accordingly.)
          </p>
          <FileField
            name="file"
            buttonOnly
            label="Upload ZIP backup package"
            onChange={(f) => this.handleAttachBackup({ file: f })}
            buttonClass="btn add-file" />

          {this.state.successMessage && <span className="success message">{this.state.successMessage}</span> }
          {this.state.errorMessage && <span className="error message">{this.state.errorMessage}</span> }
        </form>
      </FoldablePanel>
    );
  }

}
