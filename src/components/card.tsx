import React, { Component } from 'react';
import { SearchResult } from '../services/search_service';


 
class Card extends Component<{game: SearchResult}> {
    render(){
      return (
        <div className="Card">
          <p> {this.props.game.Name} {this.props.game.Id} </p> 
        </div>
      );
    }
    async componentDidMount() {
      //await get_games();
    }
    
    
}

export default Card; 