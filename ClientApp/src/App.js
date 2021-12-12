import React, { Component } from 'react';
import Message from './components/Message'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <div>
              <Message/>
          </div>
    );
  }
}
