import { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import Content from './components/content';
import { SearchResult } from './services/search_service';
import {Modes} from './shared';
import * as wishlistService from './services/wishlist_service'
class App extends Component {

  state = {
    searchResult: [],
    mode: Modes.Games, 
    displaySideBar: true,
    wishlists: []
  }

  render(){
    return (
      <div className="App">
        <NavBar  modeHandler={this.setMode} sidebarToggler={this.toggleSideBar} />
        {this.sidebar()}
        {this.content()}
      </div>
    );
  }
  async componentDidMount() {
    //await get_games();
    this.setState({
      wishlists:await wishlistService.get_all_wishlists()
    }) 
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

  toggleSideBar = () => {
    this.setState({
      displaySideBar: !this.state.displaySideBar
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

  sidebar(){
    if(this.state.displaySideBar){
      return <SideBar searchHandler={this.searchBarHandler} mode={this.state.mode} wishlists={this.state.wishlists}/>
    }
  }
  
}

export default App;
