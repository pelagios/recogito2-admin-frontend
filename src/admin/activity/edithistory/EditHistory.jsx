import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import './EditHistory.scss';

export default class EditHistory extends Component {

  render() {
    const labels = this.props.history.map(e => {
      return e.date;
    });

    const series = this.props.history.map(e => {
      return e.value;
    });

    const data = { labels: labels, series: [ series ]};

    const options = { axisX: { 
        labelInterpolationFnc: function skipLabels(value, index) {
          return index % 3  === 0 ? value : null;
        },
        showGrid: false
      }};

    return (
      <div className="cell w7 h2">
        <div className="metric activity-history">
          <div id="activity-history-chart">
            <ChartistGraph data={data} options={options} type="Bar" />
          </div>
          <span className="caption">30-Day Activity</span>
        </div>
      </div>
    );
  }

}
