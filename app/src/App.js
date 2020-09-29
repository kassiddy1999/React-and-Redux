import React, { Component } from 'react';
// to import the Ninjas
import Ninjas from './Ninjas'
import AddNInja from './AddNInja'
class App extends Component {
  state = {
  ninjas : [
    { name : 'viktor', age : 23, belt : 'black', id : 1},
    { name : 'sandra', age : 45, belt : 'Pink', id : 2},
    { name : 'silas', age : 53, belt : 'white', id : 3},
   ]
  }
  // to add new ninja
  addNinja = (ninja) => {
      ninja.id = Math.random()
      let ninjas = [...this.state.ninjas, ninja]
      this.setState({
        ninjas : ninjas
      })
  }
  // to delete ninja
  deleteNinja = (id) =>{
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas : ninjas
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('component updated')
    console.log(prevProps, prevState)
  }
render(){
  return (
    <div className="App">
    <h1> Hello World</h1>
  <Ninjas deleteNinja = { this.deleteNinja } ninjas = { this.state.ninjas } />
  <AddNInja addNinja = { this.addNinja } />
    </div>
  );
}
}

export default App;
