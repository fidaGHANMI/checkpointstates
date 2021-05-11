
import './App.css';
import React from 'react';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {Person: { fullName:"fida ghanmi",bio:27, profession: "engineer"}, 
                          shows: true};
  
                          console.log(this.state.shows)                      }

  handleClick=()=>this.setState({shows: !this.state.shows.value})
  


  render(){
return ( 
<div>
  <div className="App">
  <button onClick={this.handleClick}> Click Me </button> </div>)/</div>

if ({this.state.shows}===true) {
 
    return( 
    <div>
      <h1>{this.state.Person.fullName}</h1>
    <h1>{this.state.Person.bio}</h1>
    <h1>{this.state.Person.profession}</h1>
    </div>)
   else {
      return(
        <div>nothing to show</div>)}
    
      
    }
}

}
}
export default App;