import { Component } from 'react';
import {WishlistInfoElement} from '../services/wishlist_service';

interface Props{
    game: WishlistInfoElement
}

class WishlistCard extends Component<Props>{
    render (){
        return <div>
            <img src={this.props.game.Game.IconURL}/>
            Price: {this.getPrice()}
        </div>
    }
    getPrice = () => {
        let game = this.props.game.Game;
        return this.props.game.Markets.map((market) => {
            let options = game.PurchaseOptions.filter((f)=>
                f.Market === market
            );
            let option = options[0]; 
            return <div> 
                market: {market}
                {option.Availabilities.map((availability)=>{
                    return <div>
                        {availability.SaleState}
                        {availability.SalePrice} {availability.Currency}
                        {availability.OriginalPrice} {availability.Currency}
                    </div>
                })}
            </div>
        })
    }
}

export default WishlistCard;