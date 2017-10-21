/*
 *Module dependencies
 */
import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';
import uid from 'uid';

export default class PokeApp extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = { messages: [] };
    //console.log(this.state);
    //this.onGrowl= this.onGrowl.bind(this);
    //console.log(this.onGrowl);
  }

  onGrowl(name){
    //console.log(this.name);
    let text= `${name}, ${name}!!!!`;
    //console.log(this.text);
    this.state.messages.push({ text: text });
    //console.log(this.props.messages);
    let messages = this.state.messages;
    this.setState({ messages: messages });
  }
  render(){
    var pokemons = [
      {number:1, name: 'Bulbasaur'},
      {number:7, name: 'Squirtle'},
      {number:4, name: 'Charmander'}
    ];
    return <div className="pokeapp">
      <PokeTable pokemons = {pokemons} onGrowl={ this.onGrowl.bind(this) }/>
      <PokeChat messages = {this.state.messages}/>

    </div>
  }
}
