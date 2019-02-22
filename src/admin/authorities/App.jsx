import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import AuthorityList from './list/AuthorityList.jsx';
import AuthorityDetails from './details/AuthorityDetails.jsx';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';

import './App.scss';

export default class App extends Component {

  state = {
    authorities: [],
    selected: null
  }

  componentDidMount() {
    axios.get('/api/authorities/gazetteers')
      .then(response => {
        this.setState({ authorities: response.data });
      });
  }

  handleSelectAuthority= (authority) => {
    this.setState({ selected: authority });
  }

  handleDeleted = (authority) => {
    // TODO
  }

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">Authority Management</h1>      

        <AuthorityList 
          authorities={this.state.authorities} 
          onSelect={this.handleSelectAuthority} />  
        
        <div className="footer">
          <button className="btn" onClick={this.props.onAddNew}>
            <span className="icon">&#xf055;</span> Add Authority File
          </button>
        </div>

        {this.state.selected && 
          <AuthorityDetails 
            value={this.state.selected} 
            onDelete={this.handleDeleted}
            onCancel={() => this.setState({ selected: null })} />
        }
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));