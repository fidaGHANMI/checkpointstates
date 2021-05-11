
import './App.css';
import React from 'react';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {person: { fullName:"fida ghanmi",bio:27, profession: "engineer"}, 
                          shows: true,
                        time:1};
  
                          console.log(this.state.shows)                      }

  handleClick=()=>this.setState({shows: !this.state.shows})

  componentDidMount() {
    
    setInterval(() => {
      this.setState({time:this.state.time+1});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}> Click Me </button>
{
this.state.shows ?(
<div> 
  <h1>{this.state.person.fullName}</h1>
   <h1>{this.state.person.bio}</h1>
  <h1>{this.state.person.profession}</h1></div> )
                :(<div>nothing to show </div>)
}

    
      <h1>Number of seconds is {this.state.time}</h1>
   
  </div>
)}
    }

export default App;