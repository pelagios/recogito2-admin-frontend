import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import './EditHistory.scss';

const MONTH_NAMES_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sept', 'Oct', 'Nov', 'Dec' ];

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  return `${MONTH_NAMES_SHORT[month]} ${day}`;
}

export default class EditHistory extends Component {

  render() {
    const labels = this.props.history.map(e => {
      return formatDate(new Date(e.date));
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
          <div className="inner">
            <div id="activity-history-chart">
              <ChartistGraph data={data} options={options} type="Bar" />
            </div>
          </div>
          <span className="caption">30-Day Activity</span>
        </div>
      </div>
    );
  }

}
