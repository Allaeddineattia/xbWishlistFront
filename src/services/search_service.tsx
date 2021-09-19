import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8080/game/",
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
}) 

let search_game = async (query: string, language: string, markets: Array<string>): Promise<Array<SearchResult>> => {
    let params: any = {
        query,
        language,
        markets: markets.join(",")
    } 
    return (await client.get("search", {params})).data
}



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

export {search_game};