import React from 'react';

export class Siblling extends React.Component{
  render(){
    const name = this.props.name;
    return (
      <div>
        <h1>Hey my name is {name}</h1>
        <h2>Dont you think {name} is the prettiest name ever?</h2>
      </div>
    )
  }
}
