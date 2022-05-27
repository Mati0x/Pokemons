import userEvent from '@testing-library/user-event'
import {useEffect, useContext, useState} from 'react'
import MiniPokemonItem from './MiniPokemonItem'
import PokemonContext from './PokeContext'
import styled from 'styled-components'

function MiniPokemonCarousel() {
    const {pokemon, loading, fetchPokemon} = useContext(PokemonContext)

    const [move, setMove] = useState(0)


    useEffect(() =>{  
        fetchPokemon() 
      },[])
     
    
    return (
      <>
        <div className="container">
          <Carousel>
            <div style={{
              display:'flex',
              alignItems:'center', 
              transform: `translateX(${move}px)`,
              transition: 'transform .5s ease-in-out',
              // border:'3px solid red',
            }}>
            {pokemon.map((pokemon, idx) => (
              <MiniPokemonItem 
                key={idx}
                pokemon={pokemon}
                idx={idx}
              />  
            ))}
            </div>
          </Carousel>

          <Buttons>
            <button
                className='left' 
                onClick={ () => setMove(move  +160)}
                >Prev 
            </button>

            <button
                className='right' 
                onClick={ () => setMove(move  -160)}
                >Next
            </button>
            </Buttons> 
        </div>
      </>
    ) 
}

const Carousel = styled.div`
height: 300px;
width: 160px;
overflow: hidden;
border-radius: 15px;

` 
const Buttons = styled.div`
  width: 160px;

  button{
    width: 50%;
    font-family: inherit;
    font-weight: bold;
    padding: .2rem .4rem;
    margin-top: .2rem;

    &:active{
      transform: scale(.98);
    }

    &.left{
      
    }

    &.right{

    }
  }
`

export default MiniPokemonCarousel