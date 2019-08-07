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
      return formatDate(new Date(e[0]));
    });

    const series = this.props.history.map(e => {
      return e[1];
    });

    const data = { labels: labels, series: [ series ]};

    const options = { 
      fullWidth: true,
      chartPadding: {
        top:26
      },
      axisX: { 
        showGrid:false,
        labelInterpolationFnc: (val, idx) => idx % 3  === 0 ? val : null
      }
    };

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
