import React, { Component } from 'react';
import axios from 'axios';
import copy from 'copy-to-clipboard';
import { confirm } from '../../../common/components/confirm/Confirm.js';
import Modal from '../../../common/components/modal/Modal.jsx';
import CheckboxField from '../../../common/components/form/CheckboxField.jsx';
import StringField from '../../../common/components/form/StringField.jsx';

import './UserDetails.scss';

export default class UserDetails extends Component {

  state = {
    quota: this.props.quota,
    is_admin: this.props.isAdmin
  }

  componentWillReceiveProps(next) {
    if (next.quota !== this.state.quota || next.is_admin !== this.state.isAdmin)
      this.setState({
        quota: next.quota,
        is_admin: next.is_admin
      });
  }

  formatURL(url) {
    return url.replace(/^https?:\/\//i, '');
  }

  handleChangeQuota = evt => {
    this.setState({ quota: evt.target.value });
  }

  handleSetAdmin = evt => {
    this.setState({ is_admin: evt.target.checked });
  }

  onResetPassword = evt => {
    const exec = () => axios.post(`/admin/user/${this.props.username}/reset`).then(response => {
      copy(response.data.temporary);
      alert(`Password reset to: ${response.data.temporary}. Password copied to clipboard!`);
    });

    confirm({
      title: 'Reset Password',
      type: 'warning',
      message: 'Are you sure? This is not reversible.',
      onConfirm: exec
    });
  }

  onSave = evt => {
    evt.preventDefault();

    this.props.onSave({
      quota: parseInt(this.state.quota),
      is_admin: this.state.is_admin
    });
  }

  render() {   
    return (
      <Modal 
        className="user-details" 
        title="User Details"
        onClose={this.props.onCancel}>

        <div className="identity">
          <div className="basics">
            <h1>
              {this.props.real_name ? this.props.real_name : this.props.username}
            </h1>
            <p className="member-since">
              Joined on { new Intl.DateTimeFormat('en-GB', {
                year : 'numeric',
                month: 'short',
                day  : '2-digit'
              }).format(new Date(this.props.member_since)) }
            </p>
          </div>

          <div className="extended">
            { this.props.bio &&
              <p className="bio">{this.props.bio}</p> }

            { this.props.website && 
              <p className="homepage">
                <a href={this.props.website}>{this.formatURL(this.props.website)}</a>
              </p> }
          </div>
        </div>

        <div className="user-settings">
          <form className="crud" onSubmit={this.onSave}>
            <StringField
              name="quota" 
              label="Quota (MB)" 
              value={this.state.quota} 
              onChange={this.handleChangeQuota} />

            <CheckboxField 
              name="is_admin" 
              label="System Administrator" 
              checked={this.state.is_admin}
              onChange={this.handleSetAdmin} />
          </form>
        </div>

        <div className="footer">
          <button
            className="btn small red delete"
            onClick={this.props.onDeleteUser}>
            <span className="icon">&#xf1f8;</span> Delete This Account
          </button>

          <button
            className="btn small red outline reset"
            onClick={this.onResetPassword}>
            Reset Password
          </button>

          <button
            className="btn small outline"
            onClick={this.props.onCancel}>
            <span className="icon">&#xf00d;</span> Cancel
          </button>

          <button
            className="btn small"
            onClick={this.onSave}>
            <span className="icon">&#xf00c;</span> Save
          </button>
        </div>
      </Modal>
    )
  }

}
