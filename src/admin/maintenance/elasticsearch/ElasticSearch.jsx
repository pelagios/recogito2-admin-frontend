import React, { Component } from 'react';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './ElasticSearch.scss';

export default class ElasticSearch extends Component {

  render() {
    return (
      <FoldablePanel
        className="elasticsearch"
        title="ElasticSearch">

      </FoldablePanel>
    );
  }

}
