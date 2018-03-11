import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/Contact';
import update from 'react-addons-update';

require('./style.css');

class App extends React.Component{
  render(){
    return <div>I Like it!</div>
  }
}

ReactDOM.render(<Contact />,document.getElementById("root"));

let array=[0,1,2,3,4,5];
let changedArray =update(array,{
  $splice:[[0,2]]
});

console.log(changedArray);
