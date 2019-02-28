import React, { Component } from 'react';
import TimeAgo from 'react-timeago'
import {format} from '../../../common/util/Contribution.js';

import './RightNow.scss';

export default class RightNow extends Component {

  findDocumentById = (id) => {
    return this.props.documents.find(d => {
      return d.id === id;
    });
  }

  render() {
    const rows = this.props.contributions.map((c, idx) => {
      
      const doc = this.findDocumentById(c.affects_item.document_id);
      const label = doc && (doc.author ? `${doc.author}: ${doc.title}` : doc.title);
      const url = `/annotation/${c.affects_item.annotation_id}`
      
      return (
        <tr key={idx}>
          <td>{format(c)}</td>
          <td><a href={url}>{label}</a></td>
          <td className="made-at"><TimeAgo date={c.made_at} /></td>
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
