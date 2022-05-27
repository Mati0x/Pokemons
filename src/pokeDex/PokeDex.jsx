// import { FlexPokeCards } from './Components.styled'
import PokeNavBar from './PokeNavBar'
import PokeItem from './PokeItem'
import MiniPokemon from './MiniPokemon'
import { PokemonProvider } from './PokeContext'
import MiniPokemonCarousel from './MiniPokemonCarousel'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function PokeDex( ) {
  return (
    <>
    <PokemonProvider> 
      <Router>
       <PokeNavBar/>
        <Routes>
            {/* <Route path='/'> */}
            <Route path='/carousel' element={<MiniPokemonCarousel />}/>
            <Route path='/pokeitem' element={<PokeItem/>}/>
            <Route path='/minipokemon' element={<MiniPokemon/>}/>
        </Routes>
      </Router>
    </PokemonProvider>
  </>
           
  )
}

export default PokeDex