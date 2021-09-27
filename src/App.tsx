import React, { Component } from 'react';
import './App.css';
import {get_games} from './services/serivce';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import Content from './components/content';
import { SearchResult } from './services/search_service';
import {Modes} from './shared';
class App extends Component {

  state = {
    searchResult: [],
    mode: Modes.Games, 
  }

  render(){
    return (
      <div className="App">
        <NavBar  modeHandler={this.setMode}/>
        <SideBar searchHandler={this.searchBarHandler}/>
        {this.content()}
      </div>
    );
  }
  async componentDidMount() {
    //await get_games();
  }
  
  searchBarHandler = async (searchResult: Array<SearchResult>) =>{
    this.setState ({
      searchResult
    })
    console.log("hehi: /n", this.state.searchResult)
  }

  setMode = async (mode: Modes) => {
    this.setState({
      mode
    })
  } 

  content(){
    if (this.state.mode == Modes.Games){
      return <Content games={this.state.searchResult}/>
    }else if (this.state.mode == Modes.Wishlist){
      return <div> 
          heeehi 
        </div>;
    }
  }
  
}

export default App;
