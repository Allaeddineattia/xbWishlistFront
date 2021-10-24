import axios from "axios";
import {SearchResult} from "./search_service"

export interface Wishlist{
    Name: string, //Name
    Games: Array<WishlistInfoElement>, //Game
    Language: string, //Language
    Markets: Array<string>, //Markets
}

export interface WishlistInfoElement{
    Game: SearchResult, //Game
    Markets: Array<string>, //Markets
}

const client = axios.create({
    baseURL: "http://localhost:8080/wishlist/",
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
}) 

export let get_all_wishlists = async ( ) : Promise<Array<Wishlist>> =>  {
    return (await client.get("all")).data
}