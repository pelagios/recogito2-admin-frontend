import React, { Component } from 'react';
import axios from 'axios';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './ElasticSearch.scss';

export default class ElasticSearch extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <FoldablePanel
        className="elasticsearch"
        title="ElasticSearch">

      </FoldablePanel>
    );
  }

}
