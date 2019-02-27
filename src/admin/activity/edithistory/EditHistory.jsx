import React, { Component } from 'react';

import './EditHistory.scss';

export default class EditHistory extends Component {

  render() {
    return (
      <div className="cell w7 h2">
        <div className="metric activity-history">
          <div id="activity-history-chart"></div>
          <span className="caption">30-Day Activity</span>
        </div>
      </div>
    );
  }

}
