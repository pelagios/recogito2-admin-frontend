import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import NumberFormat from 'react-number-format';

import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';
import TopContributors from './topcontributors/TopContributors.jsx';
import EditHistory from './edithistory/EditHistory.jsx';
import RightNow from './rightnow/RightNow.jsx';

import './App.scss';

const Number = (props) => {

  return (
    <span className="number">
      <NumberFormat
        displayType="text"
        value={props.value}
        thousandSeparator={true} />
    </span>
  )

}

const REFRESH_INTERVAL_MS = 1000;

export default class App extends Component {

  state = {
    totalEdits: null,
    totalAnnotations: null,
    totalVisits: null,
    totalUsers: null,
    topContributors: [], 
    contributionHistory: [],
    recentContributions: [], 
    recentDocuments: []
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    axios.get('/admin/stats.json')
      .then(result => {
        this.setState({
          totalEdits: result.data.contribution_stats.total_contributions,
          totalAnnotations: result.data.total_annotations,
          totalVisits: result.data.total_visits,
          totalUsers: result.data.total_users,
          topContributors: result.data.contribution_stats.by_user,
          contributionHistory: result.data.contribution_stats.contribution_history,
          recentContributions: result.data.recent_contributions,
          recentDocuments: result.data.recent_documents
        }, () => {
          window.setTimeout(this.refresh, REFRESH_INTERVAL_MS);
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

          <EditHistory
            history={this.state.contributionHistory} />

          <TopContributors scores={this.state.topContributors} />
          
          <RightNow 
            contributions={this.state.recentContributions}
            documents={this.state.recentDocuments} />

          { this.numberCell(3, 2, 'total-visits', 'Total Visits', this.state.totalVisits) }
        </div>

      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));