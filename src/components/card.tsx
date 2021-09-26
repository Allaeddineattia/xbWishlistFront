import React, { Component } from 'react';
import { SearchResult } from '../services/search_service';
import './card.css';

/*
export interface SearchResult{
  Id: string;
  Name: string;
  PublisherName: string;
  DeveloperName: string;
  Description: string;
  IconURL: string;
  Language: string;
  PurchaseOptions: Array<PurchaseOption>;

}

interface PurchaseOption{
  Markets: string
  StoreURL: string
  Availabilities: Array<Availability>
}

interface Availability{
  SaleState: string;
  OriginalPrice: number;
  SalePrice: number;
  DiscountRatio: number;
  Currency: string;
  StartDate: Date;
  EndDate: Date;
}
*/

 
class Card extends Component<{game: SearchResult}> {
    render(){
      return (
        <div className="Card">
          <img src={this.props.game.IconURL}/>
          {/* <p className="CardName"> {this.props.game.Name} </p>   */}
        </div>
      );
    }
    async componentDidMount() {
      //await get_games();
    }
    
    
}

export default Card; 