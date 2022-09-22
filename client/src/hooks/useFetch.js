import axios from "axios";
import { useState,useEffect } from "react";
const api = axios.create({
    baseURL:"http://localhost:3000"
})


export function useFetch(url){

    const [data, setDataM] = useState([]);

    useEffect(()=>{
        api.get(url)
        .then(response=>{setDataM(response.data)})
    }, [])

 
    return {data}
}