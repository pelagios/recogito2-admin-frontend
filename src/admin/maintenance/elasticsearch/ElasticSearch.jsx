import React, { Component } from 'react';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './ElasticSearch.scss';

export default class ElasticSearch extends Component {

  render() {
    return (
      <FoldablePanel
        className="elasticsearch"
        title="ElasticSearch">

        <div className="instructions">
          Recogito stores the follwing data in the ElasticSearch index:

          <ul>
            <li>Annotations and previous annotation versions</li>
            <li>Entities from authority files</li>
            <li>Activity stats</li> 
            <li>User visit stats</li>
          </ul>

          You can back up your index by creating snapshots. Instructions for how to do this 
          are <a href="https://www.elastic.co/guide/en/elasticsearch/reference/5.6/modules-snapshots.html" target="_blank">here</a>.
        </div>

      </FoldablePanel>
    );
  }

}
