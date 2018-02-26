import React from 'react';

export class Girls extends React.Component{
  render(){
    if(this.props.friend==="Lisa Shimizu"){
      return(<h1> I Love {this.props.friend}</h1>);
    } else{
      return(<h1> I do not like {this.props.friend}</h1>);
    }
  }
}
