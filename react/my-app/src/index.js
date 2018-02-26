import React from 'react';
import ReactDOM from 'react-dom';
const styles= {background:'lightblue',color:'darkred'}
ReactDOM.render(
  <h1 style={styles}> Please style me! I am so bland!</h1>,
  document.getElementById('app1')
)

/*
import React from 'react';
import ReactDOM from 'react-dom'
import {Child} from './Child'

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state={name:'Frarthur'}
    this.changeName =this.changeName.bind(this);
  }
  changeName(newName){
    this.setState({
      name:newName
    });
  }
  render(){
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

ReactDOM.render(<Parent />,document.getElementById('app1'))

//Don't update Props/ just update state!!!!!!!1

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={title:'Best App'};
    this.changeTitle= this.changeTitle.bind(this);
  }
  changeTitle(){
    let newTitle= this.state.title ==='Best App'?'Worst App':'Best App';
    this.setState({title:newTitle})
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>Change Title</button>
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('app1'))

import {Greeting} from './greeting'
class PropsDisplayer extends React.Component{
  constructor(){
    super()
    this.state='Nayoung'
  }

  handleEvent(){
    let speech ='';
    for (let i=0; i<10;i++){
      speech +=this.state
    }
    alert(`Hello ${this.state}`);
  }

  render(){
    return(
      <div>
        <h1>Check Out</h1>
        <h2>{this.props.MyInfo[0]}</h2>
        <Greeting name ={this.state} Function={this.handleEvent}/>
      </div>
    )
  }
}


*/
