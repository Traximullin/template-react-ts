import {useEffect, useReducer, useState} from "react";

interface Person {
    name:string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_day: string
    gender: string
    homeworld: string
    films: string[]
    species: string
    vehicles: string[]
    starships: string[]
    created: Date
    edited: Date
    url: string
}

type State = {
    data: Person | null
    loading: boolean
    error: Error | null
}

type Action = {
    type: 'request'
} | {
    type: 'response'
}

declare function reducer(state: State, action: Action): State

// async function getPerson (id = 1): Promise<Person> {
//     const response = await fetch(`https://swapi.dev/api/people/${id}`)
//
//     return response
// }

const Hooks = () => {
    const [state,dispatch] = useReducer(reducer, {} as State)

    useEffect(() => {
        dispatch({
            type: 'response'
        })
    },[dispatch])

    return (
        <div>
            {state?.data?.name}
        </div>
    )
}

export default Hooks