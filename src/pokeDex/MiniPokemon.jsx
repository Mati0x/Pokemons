import userEvent from '@testing-library/user-event'
import {useEffect, useContext} from 'react'
import MiniPokemonItem from './MiniPokemonItem'
import PokemonContext from './PokeContext'
import {CardContainer} from './Components.styled'



function MiniPokemon() {

    const {pokemon, loading, fetchPokemon} = useContext(PokemonContext)

    useEffect(() =>{  
        fetchPokemon() 
      },[])
     
    if(!loading){
          return (
            <CardContainer>
            {pokemon.map((pokemon, idx) => (
              <MiniPokemonItem 
                key={idx}
                pokemon={pokemon}
                idx={idx}
              />  
            ))}
            </CardContainer>
        )
    }else{
      return
     <h3>loading...</h3>
    }    
}

export default MiniPokemon