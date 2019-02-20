import React, { Component } from 'react';
import Modal from '../../../common/components/modal/Modal.jsx';
import StringField from '../../../common/components/form/StringField.jsx';

import './UserDetails.scss';

export default class UserDetails extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown, false);
  }

  onKeydown= (evt) => {
    if (evt.which === 27) this.props.onCancel();
  }

  formatURL(url) {
    return url.replace(/^https?:\/\//i, '');
  }

  render() {      
    return (
      <Modal 
        className="user-details" 
        handle=".identity"
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
          <form className="crud">
            <StringField name="quota" label="Quota (MB)" value={200} />
          </form>
        </div>

        <div className="footer">
          <button
            className="btn small red delete">
            <span class="icon">&#xf1f8;</span> Delete Account
          </button>

          <button
            className="btn small outline"
            onClick={this.props.onCancel}>
            <span class="icon">&#xf00d;</span> Cancel
          </button>

          <button
            className="btn small">
            <span class="icon">&#xf00c;</span> Save
          </button>
        </div>
      </Modal>
    )
  }

}
