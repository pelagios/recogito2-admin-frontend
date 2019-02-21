import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';
import UserDetails from './details/UserDetails.jsx';
import UserTable from './table/UserTable.jsx';
import { confirm } from '../../common/components/confirm/Confirm.js';

import './App.scss';

export default class App extends Component {

  state = {
    selected_user: null
  }

  selectUser = (user) => {
    this.setState({ selected_user: user });
  }

  deselectUser = () => {
    this.setState({ selected_user: null });
  }

  saveUserSettings = (settings) => {
    axios.put(`/admin/user/${this.state.selected_user.username}`, settings)
      .then(result => {
        this.setState({ selected_user: null }, () => window.location.reload());
      });
  }

  deleteUser = () => {
    confirm({
      title: 'Delete Account',
      message: 'This operation is not reversible. Are your sure?',
      type: 'WARNING',

      onConfirm: () => {
        axios.delete(`/admin/user/${this.state.selected_user.username}`).then(result => {
          this.setState({ selected_user: null }, () => window.location.reload());
        });
      },

      onCancel: () => {
        // Do nothing
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <h1 className="page-title">User Management</h1>
        
        <UserTable 
          onSelectUser={this.selectUser} />

        {this.state.selected_user && 
          <UserDetails 
            username={this.state.selected_user.username} 
            real_name={this.state.selected_user.real_name} 
            member_since={this.state.selected_user.member_since}
            bio={this.state.selected_user.bio} 
            website={this.state.selected_user.website} 
            quota={this.state.selected_user.quota}
            isAdmin={this.state.selected_user.is_admin}
            onCancel={this.deselectUser} 
            onSave={this.saveUserSettings}
            onDeleteUser={this.deleteUser} />
        }
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));