import axios from "axios";
import { useState } from "react";
const api = axios.create({
    baseURL:"http://localhost:3000/mentor"
})


export function postLogin(url,email,password){
    const [token, setToken] = useState('');

        api.post(url, {email,password})
        .then(response=>{setToken(response.data)})


    return token
}