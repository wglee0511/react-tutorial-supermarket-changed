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
                    setLoading(false);
                    console.log(data);
                    return reject(data);
                }
                setLoading(false);
                resolve(data);
            })
            .catch(error => {
                setLoading(false);
                console.error(error)
            })
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
                        setLoading(false);
                        console.log(data)
                        return reject(data);
                    }
                    setLoading(false);
                    resolve(data);
                })
                .catch(error =>{ 
                    setLoading(false);
                    console.error(error) 
                })
  
            })
            )
                
        };
        
        return {get, post, isLoading};

}