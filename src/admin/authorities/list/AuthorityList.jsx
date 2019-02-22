import React, { Component } from 'react';

const fmt = new Intl.NumberFormat('en-US');

const TYPE_ICONS = {
  'PLACE': '\uf041',
  'PERSON': '\uf007'
}

export default class AuthorityList extends Component {

  render() {
    const rows = this.props.authorities.map(authority => 
      <tr 
        key={authority.identifier}
        onClick={evt => this.props.onSelect(authority)}>

        {authority.conflicted ?
          <td className="conflicted-warning"><span className="icon">&#xf071;</span></td> :
          <td></td>
        }
        <td><span className="icon">{TYPE_ICONS[authority.authority_type]}</span></td>
        <td>
          { 
            authority.homepage ? 
              authority.shortname : <a href={authority.homepage} target="_blank" rel="noopener noreferrer">{authority.shortname}</a>
          }
        </td>
        <td>{authority.fullname}</td>
        <td>{authority.shortcode}</td>
        <td className="align-right">{fmt.format(authority.count)}</td>
      </tr>
    );

    return (
      <div className="authority-list">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Shortname</th>
              <th>Full Name</th>
              <th>Shortcode</th>
              <th className="align-right"># Records</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }

}