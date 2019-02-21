import React, { Component } from 'react';

const fmt = new Intl.NumberFormat('en-US');

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
        <td>{authority.identifier}</td>
        <td>{authority.shortname}</td>
        <td className="align-right">{fmt.format(authority.count)}</td>
      </tr>
    );

    return (
      <div className="authority-list">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Identifier</th>
              <th>Name</th>
              <th className="align-right">Records</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }

}