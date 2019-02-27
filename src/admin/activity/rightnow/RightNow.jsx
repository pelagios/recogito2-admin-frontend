import React, { Component } from 'react';

import './RightNow.scss';

export default class RightNow extends Component {

  findDocumentById = (id) => {
    return this.props.documents.find(d => {
      return d.id === id;
    });
  }

  documentLabel = (d) => {
    if (d) return d.author ? `${d.author}: ${d.title}` : d.title;
  }

  render() {
    const rows = this.props.contributions.map((c, idx) => {
      const document = this.findDocumentById(c.affects_item.document_id);

      return (
        <tr key={idx}>
          <td>{/* ContributionUtils.format(contribution) */}</td>
          <td><a href="' + documentUrl + '">{this.documentLabel(this.findDocumentById(c.affects_item.document_id))}</a></td>
          <td className="made-at">{/* Formatting.timeSince(contribution.made_at) */}</td>
        </tr>
      )
    });

    return (
      <div className="cell w7 h3">
        <div className="metric right-now">
          <div className="container">
            <table>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
          <span className="caption">Recogito Right Now</span>
        </div>
      </div>
    );
  }

}
