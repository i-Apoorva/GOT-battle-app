import React, { Component } from 'react';
import { Button, Navbar, Nav , Form, FormControl} from 'react-bootstrap';
import Autocomplete from "./Autocomplete";
import ResultData from './ResultData/index'

class App extends Component {
  state= {BattlesList: [], BattleName:'', battleData: [] };

componentDidMount() {
  fetch(`${document.location.origin}/battles`)
  .then(response=> response.json())
  .then(json=> this.setState({BattlesList: json }))
  .catch(error=> alert(error.message));
  }

  searchResult= async (userInput)=>{
    await this.setState({BattleName: userInput});
    console.log('user input is', userInput)
     try{
      const data = await (await fetch(`${document.location.origin}/search?name=${this.state.BattleName}`)).json()
      this.setState({battleData: data })
     } catch(e) {
         alert(e.message)
     }
  }

  render() {
    return (
      <div className="container">
        
      <div className="App">
     <h1 className="app-heading">Game of Thrones Battles</h1>
     <Autocomplete
        options={ this.state.BattlesList}
        searchResult= {this.searchResult}
      />
      </div>
      <div >
       <ResultData battleData={this.state.battleData} />
       </div> 
      
      </div>
    );
  }
}

export default App;
