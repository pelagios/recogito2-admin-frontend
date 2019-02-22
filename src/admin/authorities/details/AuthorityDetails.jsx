import React, { Component } from 'react';
import DetailsForm from './DetailsForm.jsx';
import axios from 'axios';
import { confirm } from '../../../common/components/confirm/Confirm.js';

import './AuthorityDetails.scss';

/** Container component for AuthorityDetails **/
export default class DetailsContainer extends Component {

  state = {
    operation_pending: false,
    errorMessage: null
  }

  validate(authority) {
    const hasIdentifier = authority.identifier;
    const hasShortname = authority.shortname;

    // Identifier and shortname are required properties
    if (!hasIdentifier && !hasShortname)
      this.setState({ errorMessage: 'Identifier and shortname are required properties' })
    else if (!hasIdentifier)
      this.setState({ errorMessage: 'Identifier is required' })
    else if (!hasShortname)
      this.setState({ errorMessage: 'Shortname is required' })
    else
      this.setState({ errorMessage: null });

    return hasIdentifier && hasShortname;
  }

  handleSave = (authority) => {
    if (this.validate(authority)) {
      const formdata = new FormData();

      Object.keys(authority).forEach(key => {
        const val = authority[key];
        if (val) formdata.append(key, val);
      });

      this.setState({ operation_pending: true });
      axios.post('/admin/gazetteers', formdata)
        .then(result => {
          this.setState({ operation_pending: false });
          this.props.onUpdate(authority);
        })
        .catch(error => {
          this.setState({ errorMessage: error.response });
        });
    }
  }

  handleDelete = (authority) => {
    confirm({
      title: 'Delete Authority',
      message: 'This operation is not reversible. Are your sure?',
      type: 'WARNING',

      onConfirm: () => {
        this.setState({ operation_pending: true });
        axios.delete(`/admin/gazetteers/${encodeURIComponent(this.props.value.identifier)}`).then(result => {
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
        errorMessage={this.state.errorMessage}
        value={this.props.value} 
        onCancel={this.props.onCancel} 
        onSave={this.handleSave} 
        onDelete={this.handleDelete} />
    )
  }

}