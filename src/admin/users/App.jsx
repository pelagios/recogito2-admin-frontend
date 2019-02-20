import React, { Component } from 'react';
import { render } from 'react-dom';
import NavigationMenu from '../../common/components/navigationmenu/NavigationMenu.jsx';
import UserDetails from './details/UserDetails.jsx';
import UserTable from './table/UserTable.jsx';

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
            onClose={this.deselectUser} />
        }
      </React.Fragment>
    );
  }

}

render(<App />, document.getElementById('app'));