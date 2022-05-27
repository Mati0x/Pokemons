import { useContext, useEffect } from "react"
import PokemonContext from "./PokeContext"
import MiniPokemonItem from "./MiniPokemon"

function PokeCarousel() {
  
    const {pokemon, loading, fetchPokemon} = useContext(PokemonContext)
    
    useEffect(() =>{  
        fetchPokemon() 
      },[])
   
        return (
         <div className="wrapper">
            {pokemon.map((pokemon, idx) => (
              <MiniPokemonItem 
                key={idx}
                pokemon={pokemon}
                idx={idx}
              />  
            ))}
            </div>
        )

}

export default PokeCarousel