/*
 *Module dependencies
 */
import React from 'react';
import PokeMessage from './PokeMessage';

export default class PokeChat extends React.Component {

  render(){
    console.log(this.props.messages)
    return <ul className="pokechat">
    <h1>'hola'</h1>
      {

        this.props.messages.map( (message) => {

          return <PokeMessage message={message} />;
          
        })
      }
    </ul>
  }

}

PokeChat.defaultProps = { messages: [] }
