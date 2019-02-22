import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import AuthorityList from './list/AuthorityList.jsx';
import AuthorityDetails from './details/AuthorityDetails.jsx';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';

import './App.scss';

const AUTHORITY_TEMPLATE = {
  identifier: '',
  shortname: '',
  fullname: '',
  homepage: '',
  shortcode: '',
  url_patterns: '',
  color: '',
  file: null
};

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

  handleSave = (authority) => {
    const isNew = !this.state.authorities.find(a => a.identifier === authority.identifier);
    
    const updatedAuthorities = isNew ? [...this.state.authorities, authority ] :
      this.state.authorities.map(a => {
        return (a.identifier === authority.identifier) ?
          { ...a, ...authority } : a;
      });

    this.setState({ 
      authorities: updatedAuthorities,
      selected: null 
    });
  }

  handleDelete = (authority) => {
    this.setState({ 
      authorities: this.state.authorities.filter(a => a.identifier !== authority.identifier),
      selected: null 
    });
  }

  onAddNew = () => {
    this.setState({ selected: {...AUTHORITY_TEMPLATE} });
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
          <button className="btn" onClick={this.onAddNew}>
            <span className="icon">&#xf055;</span> Add Authority File
          </button>
        </div>

        {this.state.selected && 
          <AuthorityDetails 
            value={this.state.selected} 
            onSave={this.handleSave}
            onDelete={this.handleDelete}
            onCancel={() => this.setState({ selected: null })} />
        }
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));