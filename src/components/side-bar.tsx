import React, { Component } from 'react';
import { SearchResult, search_game } from '../services/search_service';
import { Modes } from '../shared';
import './side-bar.css';
import {Wishlist} from '../services/wishlist_service'
class SideBar extends Component<
{
  searchHandler:any,
  mode: Modes,
  wishlists: Array<any>
}

> {

  state = {
    query: ""
  }

    render(){
      return (
        <div className="sidebar">
            
          <label htmlFor="site-search">Search the site:</label>
          <input type="search" id="site-search" name="q"
              aria-label="Search through site content" onChange={this.onChangeHandler} />
          <button onClick={this.onClickHandler}>Search</button>
          {this.menu()}
        </div>
      );
    }
    async componentDidMount() {
      //await get_games();
    }

    onChangeHandler = async (event: any) => {
      this.setState({
        query: event.target.value
      })
    }

    onClickHandler = async (event: any) => {
      this.props.searchHandler(await search_game(this.state.query, "en-US", ["AR", "US"]) );
    }
    
    menu = () => {
      if (this.props.mode == Modes.Games){
        return <p> games yaaaay</p>
      }else if (this.props.mode == Modes.Wishlist){
        let wishlists = this.props.wishlists
        let handleWishlistSelect = this.handleWishlistSelect
        return  <ul>
                  { wishlists.map((wishlist: Wishlist) =>{
                    return <li id={wishlist.Name} key="{wishlist.Name}" onClick={handleWishlistSelect}> {wishlist.Name} </li>
                  } ) }
                </ul> 
      }
    }

    handleWishlistSelect(event:any){
      console.log(event.target)
    }
    
}


export default SideBar;