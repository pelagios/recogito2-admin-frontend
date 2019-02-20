import React, { Component } from 'react';
import Modal from '../../../common/components/modal/Modal.jsx';
import './UserDetails.scss';

export default class UserDetails extends Component {

  formatURL(url) {
    return url.replace(/^https?:\/\//i, '');
  }

  render() {      
    return (
      <Modal 
        className="user-details" 
        onClose={this.props.onClose}>

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
      </Modal>
    )
  }

}
