import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';

import './App.scss';

export default class App extends Component {

  state = {
    totalEdits: null,
    totalAnnotations: null,
    totalVisits: null,
    totalUsers: null,
    recentContributions: [] // Timeline
  }

  componentDidMount() {
    axios.get('/admin/stats.json')
      .then(result => {
        this.setState({
          totalEdits: result.data.contribution_stats.total_contributions,
          totalAnnotations: result.data.total_annotations,
          totalVisits: result.data.total_visits,
          totalUsers: result.data.total_users,
          recentContributions: result.data.recent_contributions
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">Activity Dashboard</h1>        

        <div className="dashboard">

          <div className="cell w3 h2">
            <div className="metric total-edits">
              <span className="number">
                <NumberFormat
                  displayType="text"
                  value={this.state.totalEdits}
                  thousandSeparator={true} />
              </span>
              <span className="caption">Total Edits</span>
            </div>
          </div>

          <div className="cell w2 h2 no-pad">

            <div className="cell w12">
              <div className="metric total-annotations">
                <span className="number">
                  <NumberFormat
                    displayType="text"
                    value={this.state.totalAnnotations}
                    thousandSeparator={true} />
                </span>
                <span className="caption">Total Annotations</span>
              </div>
            </div>

            <div className="cell w12">
              <div className="metric registered-users">
                <span className="number">
                  <NumberFormat
                    displayType="text"
                    value={this.state.totalUsers}
                    thousandSeparator={true} />
                </span>
                <span className="caption">Registered Users</span>
              </div>
            </div>

          </div>

          <div className="cell w7 h2">
            <div className="metric activity-history">
              <div id="activity-history-chart"></div>
              <span className="caption">30-Day Activity</span>
            </div>
          </div>

          <div className="cell w5 h3">
            <div className="metric top-contributors">
              <table></table>
              <span className="caption">Top Contributors</span>
            </div>
          </div>

          <div className="cell w7 h3">
            <div className="metric right-now">
              <div className="container"><table></table></div>
              <span className="caption">Recogito Right Now</span>
            </div>
          </div>

          <div className="cell w3 h2">
            <div className="metric total-visits">
              <span className="number">
                <NumberFormat
                  displayType="text"
                  value={this.state.totalVisits}
                  thousandSeparator={true} />
              </span>
              <span className="caption">Total Visits</span>
            </div>
          </div>

        </div>

      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));