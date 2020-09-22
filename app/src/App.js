import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNInja from './AddNInja'
class App extends Component {
  state = {
  ninjas : [
    { name : 'viktor', age : 23, belt : 'black'},
    { name : 'sandra', age : 45, belt : 'Pink'},
    { name : 'silas', age : 53, belt : 'white'},
   ]
  }
  addNinja = (ninja) => {
      ninja.id = Math.random()
      this.setState({
        
      })
  }
render(){
  return (
    <div className="App">
    <h1> Hello World</h1>
  <Ninjas ninjas = { this.state.ninjas } />
  <AddNInja addNinja = { this.addNinja } />
    </div>
  );
}
}

export default App;
