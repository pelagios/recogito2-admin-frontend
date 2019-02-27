import React, { Component } from 'react';
import axios from 'axios';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './Logs.scss';
import Axios from 'axios';

export default class Logs extends Component {

  state = {
    log_path: null
  }

  componentDidMount() {
    axios.get('/admin/maintenance/logs/path.json')
      .then(result => {
        this.setState({ log_path: result.data.path });
      });
  }

  render() {
    return (
      <FoldablePanel
        className="logs"
        title="Logs">

        <div className="instructions">
          Your system logs can give you information in case errors occur
          during operation. For the time being, you cannot see your logs
          in the Web interface. Recogito keeps the system logs at the
          following location:

          <p className="log-path">{this.state.log_path}</p>
        </div>
      </FoldablePanel>
    );
  }

}
