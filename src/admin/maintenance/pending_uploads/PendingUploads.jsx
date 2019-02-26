import React, { Component } from 'react';
import axios from 'axios';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './PendingUploads.scss';

export default class PendingUploads extends Component {

  state = {
    uploads: []
  }

  componentDidMount() {
    axios.get('/admin/maintenance/uploads.json')
      .then(result => {
        this.setState({ uploads: result.data });
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
        title="Pending Uploads Folder">

        <table>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Title</th>
              <th>Created at</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </table>
        <div className="footer">
          <button className="btn red">Delete All</button>
        </div>
      </FoldablePanel>
    );
  }

}
