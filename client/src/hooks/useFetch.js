import axios from "axios";
import { useState,useEffect } from "react";


export function useFetch(url){

    const [data, setDataM] = useState([]);

    useEffect(()=>{
        axios.get(url)
        .then(response=>{setDataM(response.data)})
    }, [])

 
    return {data}
}