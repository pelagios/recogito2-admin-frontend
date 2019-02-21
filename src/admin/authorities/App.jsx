import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import AuthorityList from './list/AuthorityList.jsx';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';

import './App.scss';

export default class App extends Component {

  state = {
    authorities: []
  }

  componentDidMount() {
    axios.get('/api/authorities/gazetteers')
      .then(response => {
        this.setState({ authorities: response.data });
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">Entity Management</h1>      

        <AuthorityList authorities={this.state.authorities} />  
        
        <div className="footer">
          <button className="btn" onClick={this.props.onAddNew}>
            <span class="icon">&#xf055;</span> Add New
          </button>
        </div>
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));