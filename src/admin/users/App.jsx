import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import ReactTable from "react-table"

import Pagination from './Pagination.jsx';
import NavigationMenu from '../../common/components/NavigationMenu.jsx';

import '../../common/styles/layout.scss';
import './App.scss';
import 'react-table/react-table.css'

export default class App extends Component {

  state = {
    total_pages: -1,
    current_page: 0,
    page_size: 20,
    users: [],
    loading: true
  }

  onFetchData = (state, instance) => {
    const offset = this.state.page_size * state.page;
    
    axios.get(`/admin/users.json?offset=${offset}&size=${this.state.page_size}`).then((result) => {
      this.setState({ 
        loading: false,
        users: result.data.items,
        total_pages: Math.ceil(result.data.total / this.state.page_size)
      });
    });
  }

  render() {
    const columns = [{
      Header: 'Username', accessor: 'username'
    },{
      Header: 'E-Mail', accessor: 'email'
    },{
      Header: 'Real Name', accessor: 'real_name'
    },{
      Header: 'Member since', accessor: 'member_since'
    },{
      Header: 'Quota', accessor: 'quota'
    }];

    return (
      <div>
        <NavigationMenu />
        <h1 className="page-title">User Management</h1>
        <ReactTable
          PaginationComponent={Pagination}
          className="user-table"
          columns={columns}
          defaultPageSize={this.state.page_size}
          data={this.state.users}
          pages={this.state.total_pages}
          resizable={false}
          loading={this.state.loading}
          manual
          onFetchData={this.onFetchData}>
        </ReactTable>
      </div>
    );
  }

}

render(<App />, document.getElementById('app'));