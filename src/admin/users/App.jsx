import React, { Component } from 'react';
import { render } from 'react-dom';

import NavigationMenu from '../../common/components/NavigationMenu.jsx';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavigationMenu />
      </div>
    );
  }

}

render(<App />, document.getElementById('app'));