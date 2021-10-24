import { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import Content from './components/content';
import {WishlistInfoElement} from './services/wishlist_service';
import { SearchResult } from './services/search_service';
import {Modes} from './shared';
import * as wishlistService from './services/wishlist_service'
import WishlistContent from './components/wishlist_content';
class App extends Component {

  state = {
    searchResult: [],
    mode: Modes.Games, 
    displaySideBar: true,
    wishlists: [],
    selectedWishlist: null,
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
      if (this.state.selectedWishlist){
        let wishlist: wishlistService.Wishlist = this.state.selectedWishlist;
        return <WishlistContent wishlist={ wishlist}/> 
      }
    }
  }

  sidebar(){
    if(this.state.displaySideBar){
      return <SideBar wishlist_selector_handler={this.selectWishlistHandler} searchHandler={this.searchBarHandler} mode={this.state.mode} wishlists={this.state.wishlists}/>
    }
  }

  selectWishlistHandler = (wishlistName: string) => {
    let filtred = this.state.wishlists.filter((wishlist: wishlistService.Wishlist) => wishlist.Name === wishlistName );
    if (filtred.length === 1){
      let wishlist: wishlistService.Wishlist = filtred[0];
      this.setState({
        selectedWishlist: wishlist
      })
    }
  }
  
}

export default App;
