import React from 'react';
import './App.css';
import Counter from './Components/Counter';

class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
  //     show : false,
  //     mamino : 'Djeja'
  //   }
  // }

    state={
      show : false,
      mamino : 'Djeja'
    }
  handleShow=()=> this.setState({show : !this.state.show})
  render(){
    return(
      <div>
        <h1>Workshop State</h1>
        <button className={this.state.show ?"mamino" : ""} onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show && <Counter mamino={this.state.mamino}/>
        }
        
      </div>
    )
  }
}

export default App;
