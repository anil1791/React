import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub()
{
    /*const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/anil1791')
        .then((res)=>res.json())
        .then(data=>{
            
            console.log("data",data)
            setData(data)
        })
    },[])*/
    const data = useLoaderData()
    console.log("data",data)
    return(
        <div className="text-center m-4 bg-gray  p-4 text-3xl">
            Github followers : {data.followers} 
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )    

}

export default GitHub;

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/anil1791')
    const res = response.json() 
    console.log('res',res);
    return res
}