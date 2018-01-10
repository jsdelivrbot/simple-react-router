import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navbar from '../Navbar';
import Start from '../Start';
import Middle from '../Middle';
import End from '../End';

export default class App extends Component {
  constructor() {
  	super();

  	this.state = { 
      colors: [ 
        { id: 1, value: 'Red', hex: '#ff0000' }, 
        { id: 2, value: 'Yellow', hex: '#ffff00' }, 
        { id: 3, value: 'Blue', hex: '#0000ff' } 
      ],
      input: '',
      selectedColor: '',
      newObject: null
    };

    this.onColorClick = this.onColorClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onColorClick(color) {
    console.log("color: ", color);
    this.setState({ selectedColor: color });
  }

  onInputChange(event) {
    console.log("event.target.value: ", event.target.value);
    this.setState({ input: event.target.value });
  }

  onSubmit() {
    this.setState({ newObject: { input: this.state.input, color: this.state.selectedColor } });
  }

  render() {
    return (
      <div style={{marginLeft: '20px'}}>
      	<h1 style={{marginTop: '30px'}}>My awesome app with routing</h1>
        <Navbar />
        <hr />

      	<Router>
          <Switch> 
            <Route exact path="/" render={() => (
              <Start colors={this.state.colors} onClick={this.onColorClick} />
            )} />
            <Route path="/middle" render={() => (
              <Middle input={this.state.input} onChange={this.onInputChange} onSubmit={this.onSubmit} />
            )} />
            <Route path="/end" render={() => (
              <End object={this.state.newObject} />
            )} /> 
          </Switch>
        </Router>
      </div>
    );
  }
}
