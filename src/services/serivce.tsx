import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
}) 

const get_games = async () =>{
    let data = {
        Id: "c0391fl5chq2",
        Language: "en-us",
        Markets: ["BR", "FR", "US"]
    }; 
    try{
        let response = await client.request({
            method: 'get',
            url: 'game/info',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data,

        });
        console.log("hehi ", response);
    }catch (err){
        console.error("nope ", err);
    }
    
} 



export {get_games} ;