import React, { Component } from 'react';
import FoldablePanel from '../../../common/components/panel/FoldablePanel.jsx';

import './Logs.scss';

export default class Logs extends Component {

  render() {
    return (
      <FoldablePanel
        className="logs"
        title="Logs">

      </FoldablePanel>
    );
  }

}
