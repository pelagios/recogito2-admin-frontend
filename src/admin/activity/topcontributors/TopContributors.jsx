import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

import './TopContributors.scss';

export default class TopContributors extends Component {

  render() {
    const maxScore = Math.max(...this.props.scores.map(s => s.value));

    const rows = this.props.scores.map(score => 
      <tr key={score.username}>
        <td><a href={`/${score.username}`}>{score.username}</a></td>
        <td>
          <div className="meter">
            <div className="bar rounded" style={{ width: `${100 * score.value / maxScore}%` }}></div>
          </div>
        </td>
        <td>
          <NumberFormat
            displayType="text"
            value={score.value}
            thousandSeparator={true} /> Edits
        </td>
      </tr>
    );

    return (
      <div className="cell w5 h3">
        <div className="metric top-contributors">
          <table>
            <tbody>
              {rows}
            </tbody>
          </table>
          <span className="caption">Top Contributors</span>
        </div>
      </div>
    );
  }

}
