import { useEffect } from 'react'

export function Search ({routeParams}){

    useEffect(() =>{
        document.title = routeParams.query
    } ,[])

    return (
        <h1>Has buscado {routeParams.query} </h1>
    )
}