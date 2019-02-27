import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';
import Number from './components/Number.jsx';
import TopContributors from './components/TopContributors.jsx';

import './App.scss';

export default class App extends Component {

  state = {
    totalEdits: null,
    totalAnnotations: null,
    totalVisits: null,
    totalUsers: null,
    topContributors: [], // Highscores
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
          topContributors: result.data.contribution_stats.by_user,
          recentContributions: result.data.recent_contributions
        });
      });
  }

  numberCell(w, h, classname, caption, value) {
    return (
      <div className={`cell w${w} h${h}`}>
        <div className={`metric ${classname}`}>
          <Number value={value} />
          <span className="caption">{caption}</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">Activity Dashboard</h1>        

        <div className="dashboard">
          { this.numberCell(3, 2, 'total-edits', 'Total Edits', this.state.totalEdits) }

          <div className="cell w2 h2 no-pad">
            { this.numberCell(12, 1, 'total-annotations', 'Total Annotations', this.state.totalAnnotations) }
            { this.numberCell(12, 1, 'registered-users', 'Registered Users', this.state.totalUsers) }
          </div>

          <div className="cell w7 h2">
            <div className="metric activity-history">
              <div id="activity-history-chart"></div>
              <span className="caption">30-Day Activity</span>
            </div>
          </div>

          <TopContributors scores={this.state.topContributors} />

          <div className="cell w7 h3">
            <div className="metric right-now">
              <div className="container"><table></table></div>
              <span className="caption">Recogito Right Now</span>
            </div>
          </div>

          { this.numberCell(3, 2, 'total-visits', 'Total Visits', this.state.totalVisits) }
        </div>

      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));