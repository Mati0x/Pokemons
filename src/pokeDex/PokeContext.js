import { createContext, useState } from "react";


const PokemonContext = createContext()

const pokeLimit = 150 
const url = `https://pokeapi.co/api/v2/pokemon?limit=${pokeLimit}&offset=0`


export const PokemonProvider = ( {children} ) => {
    
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchPokemon = async () =>{   
        const res = await fetch(url)
        const data = await res.json()
        setPokemon(data.results)        
        setLoading(false)             
    }

    return <PokemonContext.Provider value={{
        pokemon,
        loading, 
        fetchPokemon,
    }}>
        { children }
    </PokemonContext.Provider>

}

export default PokemonContext