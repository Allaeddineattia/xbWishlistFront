import React, { Component } from 'react';
import { SearchResult } from '../services/search_service';
import Card from './card';
import './content.css';

class Content extends Component<{games: Array<SearchResult>}> {
    render(){
      return (
        <div className="content">
          {this.props.games.map((game: SearchResult) =>{
             return <Card game={game}/>
          })}
        </div>
      );
    }
    async componentDidMount() {
      //await get_games();
    }
    
    
}

export default Content;