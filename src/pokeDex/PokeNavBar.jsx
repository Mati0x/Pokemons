import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as Pokeball} from '../pokeDex/svg/pokeball.svg'
import {ReactComponent as Pokeegg} from '../pokeDex/svg/egg.svg'
import {ReactComponent as Pokego} from '../pokeDex/svg/go.svg'
import styled from 'styled-components'
import {NavBarStyled} from './Components.styled'


function PokeNavBar() {
    const navigate = useNavigate()
    const location = useLocation()

    //Funcion para matchear la route donde estamos .../pokeitem x ejemplo  con true y aplicarle la clase de active si cumple con la condicion mediante un ternary ope.
    const pathRoute = (route) => {
      if(route === location.pathname){
        return true
      }
    }

  return (
    <NavBarStyled>
        <ul>
             <li>
                <Pokeball
                className={pathRoute('/pokeitem') ? 'active' : ''} 
                onClick={() => navigate('/pokeitem')}  
                width='46px' height='46px' 
                style={{cursor:'pointer'}}
                />
               <p className={pathRoute('/pokeitem') ? 'border' : ''}>Random PokemonCard
               </p>
             </li>
             <li>
                <Pokeegg
                className={pathRoute('/carousel') ? 'active' : ''}  
                onClick={() => navigate('/carousel')} 
                width='46px'height='46px' 
                style={{cursor:'pointer'}}
                />
                <p className={pathRoute('/carousel') ? 'border' : ''}>Poke Carousel
                </p>
             </li>
             <li>
                <Pokego
                className={pathRoute('/minipokemon') ? 'active' : ''}  
                onClick={() => navigate('/minipokemon')} 
                width='46px' height='46px' 
                style={{cursor:'pointer'}}
                /> 
                <p className={pathRoute('/minipokemon') ? 'border' : ''}>Pokemon Collection
                </p>
             </li>
        </ul>
    </NavBarStyled>
  )
}


export default PokeNavBar