import React, { Component } from 'react';
import Modal from '../../../common/components/modal/Modal.jsx';
import ColorField from '../../../common/components/form/ColorField.jsx';
import FileField from '../../../common/components/form/FileField.jsx';
import StringField from '../../../common/components/form/StringField.jsx';

/** Presentational component for AuthorityDetails **/
export default class DetailsForm extends Component {

  state = {
    isNew: !this.props.value.identifier,
    identifier: this.props.value.identifier,
    shortname: this.props.value.shortname,
    fullname: this.props.value.fullname,
    homepage: this.props.value.homepage,
    shortcode: this.props.value.shortcode,
    url_patterns: this.props.value.url_patterns,
    color: this.props.value.color,
    file: this.props.value.file
  }

  onChange = (change) => {
    this.setState(change);
  }

  onSave = (evt) => {
    const { isNew, ...rest } = this.state; // Remove isNew
    this.props.onSave(rest);
    evt.preventDefault();
  }

  render() {
    return (
      <Modal 
        className="authority-details-modal" 
        title="Authority Details"
        onClose={this.props.onCancel}>

        <div className="authority-details">
          { 
            this.props.errorMessage &&
              <div className="error flash-message">
                <span className="icon">&#xf00d;</span> {this.props.errorMessage}
              </div>
          }

          <form className="crud" onSubmit={this.onSave}>
            <StringField
              name="identifier"
              label="Identifier"
              readOnly={!this.state.isNew}
              value={this.state.identifier}
              onChange={(e) => this.onChange({ identifier: e.target.value })}/>

            <StringField
              name="shortname"
              label="Short name"
              value={this.state.shortname}
              onChange={(e) => this.onChange({ shortname: e.target.value })} />

            <StringField
              name="fullname"
              label="Full name"
              value={this.state.fullname} 
              onChange={(e) => this.onChange({ fullname: e.target.value })} />

            <StringField
              name="homepage"
              label="Homepage"
              value={this.state.homepage} 
              onChange={(e) => this.onChange({ homepage: e.target.value })} />

            <StringField
              name="shortcode"
              label="Shortcode"
              value={this.state.shortcode}
              onChange={(e) => this.onChange({ shortcode: e.target.value })} />

            <StringField
              name="url_patterns"
              label="URL Patterns"
              value={this.state.url_patterns}
              onChange={(e) => this.onChange({ url_patterns: e.target.value })} />

            <ColorField
              name="color"
              label="Color"
              value={this.state.color}
              onChange={(e) => this.onChange({ color: e.target.value })} />

            <FileField
              name="file"
              label="Upload File"
              onChange={(f) => this.onChange({ file: f })}
              buttonClass="btn add-file" />
          </form>

          <div className="footer">
            {
              !this.state.isNew &&
                <button
                  className="btn small red delete"
                  onClick={this.props.onDelete}>
                  <span className="icon">&#xf1f8;</span> Delete
                </button>
            }

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

          { 
            this.props.loading && 
              <div className="loading-mask">
                Please wait...
              </div> 
          }
        </div>
      </Modal>
    );
  }

}
