import React, { Component } from 'react';
import { SearchResult, search_game } from '../services/search_service';
import './side-bar.css';

class SideBar extends Component<{searchHandler:any}> {

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
    
    
}


export default SideBar;