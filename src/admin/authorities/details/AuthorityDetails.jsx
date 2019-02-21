import React, { Component } from 'react';
import DetailsForm from './DetailsForm.jsx';

import './AuthorityDetails.scss';

/** Container component for AuthorityDetails **/
export default class DetailsContainer extends Component {

  render() {
    return (
      <DetailsForm 
        value={this.props.value} 
        onClose={this.props.onCancel} />
    )
  }

}