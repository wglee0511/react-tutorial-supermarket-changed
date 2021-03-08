import {useState} from "react";

export default function useFetch(url){
    const [isLoading, setLoading] = useState(true);

    const get = (endPoint) =>{
        return (
        new Promise((resolve, reject)=>{
            fetch(url + endPoint)
            .then(response=> response.json())
            .then(data =>{
                if(!data){
                    console.log(data);
                    return reject(data);
                }
                resolve(data);
            })
            .catch(error => console.error(error))
            .finally(setLoading(false))
            
        }) 
        )
    }
    
    
    const post = (endPoint, body) =>{
        return (
            new Promise((resolve, reject)=>{
                fetch(endPoint, {
                    method:"Post",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(body)
                })
                .then(response => response.json())
                .then(data => {
                    if(!data){
                        console.log(data)
                        return reject(data);
                    }
                    resolve(data);
                })
                .catch(error => console.error(error) )
                .finally(setLoading(false))
            })
            )
                
        };
        
        return {get, post, isLoading};

}