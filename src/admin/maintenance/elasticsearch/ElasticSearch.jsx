import React, { Component } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './ElasticSearch.scss';

export default class ElasticSearch extends Component {

  state = {
    total_docs: null
  }

  componentDidMount() {
    axios.get('/admin/maintenance/elasticsearch/props.json')
      .then(result => {
        this.setState({ total_docs: result.data.total_documents });
      });
  }

  render() {
    return (
      <FoldablePanel
        className="elasticsearch"
        title="ElasticSearch">

        <div className="instructions">
          Recogito stores the following data in the ElasticSearch index:

          <ul>
            <li>Annotations and previous annotation versions</li>
            <li>Entities from authority files</li>
            <li>Activity stats</li> 
            <li>User visit stats</li>
          </ul>

          The total number of records in your ElasticSearch index is currently:

          <span className="total-records">
            <NumberFormat
              displayType="text"
              value={this.state.total_docs}
              thousandSeparator={true} />
          </span>

          <p>
            You can back up your index by creating snapshots. Instructions for how to do this 
            are <a href="https://www.elastic.co/guide/en/elasticsearch/reference/5.6/modules-snapshots.html" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </div>

      </FoldablePanel>
    );
  }

}
