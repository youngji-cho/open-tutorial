import React from 'react';

export class Greeting extends React.Component{
  render(){
    return <button onClick={this.props.Function}>Hi there {this.props.name}</button>
  }
}
