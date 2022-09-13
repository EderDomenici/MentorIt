import { useFetch } from "../hooks/useFetch"

export function Profile(){

    const { data } = useFetch("http://localhost:3000/mentor")

    console.log(data)
    return (

        <div>
            {data.map(ret=>{
                return(
                    <>
                    <h1>{ret.id}</h1>
                    <h2>{ret.name}</h2>
                    <h3>{ret.city}</h3>
                    </>
                )
            })}


        </div>

    )

}