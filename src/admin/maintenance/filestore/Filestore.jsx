import React, { Component } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './Filestore.scss';

export default class Filestore extends Component {

  state = {
    size: null
  }

  componentDidMount() {
    axios.get('/admin/maintenance/filestore/size.json')
      .then(result => {
        this.setState({ size: result.data.size });
      })
  }

  render() {
    const size = this.state.size ? (this.state.size / 1024).toFixed(2) : null;
    return (
      <FoldablePanel
        className="filestore"
        title="User Filestore">

        <span className="label">
          Current filestore usage: 
        </span>

        <span className="value">
          <NumberFormat
            displayType="text"
            value={size}
            thousandSeparator={true} /> MB
        </span>
      </FoldablePanel>
    );
  }

}
