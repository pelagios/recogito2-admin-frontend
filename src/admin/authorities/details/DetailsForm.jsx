import React, { Component } from 'react';
import Modal from '../../../common/components/modal/Modal.jsx';
import ColorField from '../../../common/components/form/ColorField.jsx';
import FileField from '../../../common/components/form/FileField.jsx';
import StringField from '../../../common/components/form/StringField.jsx';

/** Presentational component for AuthorityDetails **/
export default class DetailsForm extends Component {

  render() {
    return (
      <Modal 
        className="authority-details-modal" 
        title="Authority Details"
        onClose={this.props.onClose}>

        <div className="authority-details">
          {this.props.errorMessage &&
            <div className="error flash-message">
              <span
                className="icon"
                onClick={this.closeMessages.bind(this)}>&#xf00d;
              </span> {this.props.errorMessage}
            </div>
          }

          {this.props.successMessage &&
            <div className="success flash-message">
              <span
                className="icon"
                onClick={this.closeMessages.bind(this)}>&#xf00c;
              </span> {this.props.successMessage}
            </div>
          }

          <form className="crud">
            <StringField
              name="identifier"
              label="Identifier"
              value={this.props.value.identifier} />

            <StringField
              name="shortname"
              label="Short name"
              value={this.props.value.shortname} />

            <StringField
              name="fullname"
              label="Full name"
              value={this.props.value.fullname} />

            <StringField
              name="homepage"
              label="Homepage"
              value={this.props.value.homepage} />

            <StringField
              name="shortcode"
              label="Shortcode"
              value={this.props.value.shortcode} />

            <StringField
              name="url_patterns"
              label="URL Patterns"
              value={this.props.value.url_patterns} />

            <ColorField
              name="color"
              label="Color"
              value={this.props.value.color} />

            <FileField
              name="file"
              label="Upload File"
              value={this.props.filename}
              buttonClass="btn add-file" />
          </form>

          <div className="footer">
          <button
            className="btn small red delete"
            onClick={this.props.onDeleteUser}>
            <span className="icon">&#xf1f8;</span> Delete
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
        </div>
      </Modal>
    );
  }

}
