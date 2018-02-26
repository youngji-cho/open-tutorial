import React from 'react';
import ReactDOM from 'react-dom';
import {Girls} from './girl.js'
import {Button} from './event.js'

class PropsDisplayer extends React.Component{
  handleEvent(){
    let speech ='';
    for(let i=0; i<10000; i++){
      speech+='blah'
    }
    alert(speech)
  }

  render(){
    return (
      <div>
       <h1>Check out my props</h1>
       <h2><Button onClick={this.handleEvent}/></h2>
      </div>
    );
  }
}

ReactDOM.render(<PropsDisplayer />,document.getElementById('app'))
