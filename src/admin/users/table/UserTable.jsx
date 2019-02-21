import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from "react-table"
import Pagination from './Pagination.jsx';

import 'react-table/react-table.css'
import './UserTable.scss';

export default class UserTable extends Component {

  state = {
    loading: true,
    total_pages: -1,
    current_page: 0,
    page_size: 15,
    users: []
  }
  
  onFetchData = (state, _) => {
    this.setState({ loading: true });

    const offset = this.state.page_size * state.page;
    const size = this.state.page_size;

    const sort_state = state.sorted && state.sorted[0];
    const sort = sort_state ? sort_state.id : 'member_since';
    const order = sort_state && sort_state.desc ? 'desc' : 'asc';

    const url = `/admin/users.json?offset=${offset}&size=${size}&sortBy=${sort}&sortOrder=${order}`;
    
    axios.get(url).then((result) => {
      this.setState({ 
        loading: false,
        users: result.data.items,
        total_pages: Math.ceil(result.data.total / this.state.page_size)
      });
    });
  }

  onRowClick = (user) => {
    this.props.onSelectUser(user);
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
        onFetchData={this.onFetchData}
        getTdProps={(_, rowInfo) => {
          return { onClick: () => { this.onRowClick(rowInfo.original) }}
        }} >
      </ReactTable>
    );
  }

}
