import { Component } from 'react';
import {PurchaseOption, Availability} from "../services/search_service"
import {WishlistInfoElement, } from '../services/wishlist_service';
import "./wishlist_card.css";

interface Props{
    game: WishlistInfoElement
}

class WishlistCard extends Component<Props>{
    render (){
        return <div className="wish-list-card card-container">
            <img src={this.props.game.Game.IconURL}/>
            {this.getPrice()}
        </div>
    }
    getPrice = () => {
        let game = this.props.game.Game;
        return this.props.game.Markets.map((market) => {
            let options = game.PurchaseOptions.filter((f)=>
                f.Market === market
            );
            let option = options[0]; 
            return < MarketPrices option={option} /> 

        })
    }
}

interface MarketProps{
    option: PurchaseOption;
}

class MarketPrices extends Component<MarketProps>{
    render (){
        let option = this.props.option;
        return <div> 
            market: {this.props.option.Market} 
            <br/>
            url: {option.StoreURL}
            {this.props.option.Availabilities.map((availability)=>{
                return <Price availability={availability}/>
            })}
        </div>
    }
}

interface PricePops{
    availability: Availability
}

class Price extends Component<PricePops>{
    render(){
        let availability = this.props.availability;
        return <div>
                    {availability.SaleState}
                    {availability.SalePrice} {availability.Currency}
                    {availability.OriginalPrice} {availability.Currency}
                </div>
    }
    notOnSale(availability: Availability){
        return <p>{availability.OriginalPrice}</p>
    }
}

export default WishlistCard;