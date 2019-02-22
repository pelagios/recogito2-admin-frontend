import React, { Component } from 'react';
import DetailsForm from './DetailsForm.jsx';
import axios from 'axios';
import { confirm } from '../../../common/components/confirm/Confirm.js';

import './AuthorityDetails.scss';

/** Container component for AuthorityDetails **/
export default class DetailsContainer extends Component {

  state = {
    operation_pending: false
  }

  handleSave = (data) => {
    console.log(data);
  }

  handleDelete = (authority) => {
    confirm({
      title: 'Delete Authority',
      message: 'This operation is not reversible. Are your sure?',
      type: 'WARNING',

      onConfirm: () => {
        this.setState({ operation_pending: true });
        axios.delete(`/admin/gazetteers/${this.props.value.identifier}`).then(result => {
          this.setState({ selected_user: null }, () => window.location.reload());
        }).then(result => {
          this.setState({ operation_pending: false });
          this.props.onDelete(this.props.value);
        })
      },

      onCancel: () => { /** Do nothing **/ }
    });
  } 

  render() {
    return (
      <DetailsForm 
        loading={this.state.operation_pending}
        value={this.props.value} 
        onCancel={this.props.onCancel} 
        onSave={this.handleSave} 
        onDelete={this.handleDelete} />
    )
  }

}