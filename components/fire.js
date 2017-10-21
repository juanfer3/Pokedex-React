/*
 *Module dependencies
 */
import React from 'react';
import PokeTable from './components/PokeTable';
//import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

export default class fire extends React.Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }
  render(){
    return(
    <div className="fire">
    //  <h1>{this.state.speed}</h1>
      <h1>Hola</h1>
    </div>
  );
  }
}
