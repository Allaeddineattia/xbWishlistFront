import React, { Component } from 'react';
import './App.css';
import {get_games} from './services/serivce';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import Content from './components/content';
import { SearchResult } from './services/search_service';
class App extends Component {

  state = {
    searchResult: []
  }

  render(){
    return (
      <div className="App">
        <NavBar  />
        <SideBar searchHandler={this.searchBarHandler}/>
        <Content games={this.state.searchResult}/>
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
  
}

export default App;
