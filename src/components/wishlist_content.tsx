import { Component } from 'react';
import {Wishlist, WishlistInfoElement} from '../services/wishlist_service';
import WishlistCard from './wishlist_card';

interface Props{
    wishlist: Wishlist
}

class WishlistContent extends Component<Props>{
    render (){
        console.log("WishlistContent wishlist " , this.props.wishlist)
        return <div>
            {this.props.wishlist.Games.map((game: WishlistInfoElement) =>{
             return <WishlistCard game={game}/>
          })}
        </div>
    }
}

export default WishlistContent;