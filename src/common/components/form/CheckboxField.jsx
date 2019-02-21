import React, { Component } from 'react';

export default class CheckboxField extends Component {

  render() {
    return (
      <dl>
        <dt>
          <label for={this.props.name}>{this.props.label}</label>
        </dt>
        <dd>
          <input
            type="checkbox"
            id={this.props.name}
            name={this.props.name}
            onChange={this.props.onChange} />
            
          <label for={this.props.name}></label>
        </dd>
      </dl>
    );
  }

}