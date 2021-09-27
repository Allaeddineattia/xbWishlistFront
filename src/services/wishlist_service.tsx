import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8080/wishlist/",
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
}) 

export let get_all_wishlists = async ( ) => {
    let result = await client.get("all") 
    console.log(result)
}