import React, { Component } from 'react';
import axios from 'axios';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './PendingUploads.scss';

export default class PendingUploads extends Component {

  state = {
    uploads: []
  }

  refresh() {
    axios.get('/admin/maintenance/uploads.json')
      .then(result => {
        this.setState({ uploads: result.data });
      });
  }

  componentDidMount() {
    this.refresh();
  }

  handleDeleteAll = () => {
    axios.delete('/admin/maintenance/uploads')
      .then(result => {
        this.refresh();
      });
  }

  render() {
    const rows = this.state.uploads.map(upload =>
      <tr>
        <td>{upload.owner}</td>
        <td>{upload.title}</td>
        <td>{upload.created_at}</td>
      </tr>
    );

    return (
      <FoldablePanel
        className="pending-uploads"
        title="Pending Uploads">

        <table>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Title</th>
              <th>Created at</th>
            </tr>
          </thead>

          {
            rows.length > 0 ?
              <tbody>{rows}</tbody> :
            
              <tbody>
                <tr><td colSpan="3" className="no-pending-uploads">There are no pending uploads</td></tr>
              </tbody>
           }

        </table>
        <div className="footer">
          <button className="btn red" onClick={this.handleDeleteAll}>Delete All</button>
        </div>
      </FoldablePanel>
    );
  }

}
