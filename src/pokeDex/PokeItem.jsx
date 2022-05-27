import {Card, CardContent, ImageDiv, PokeContent, FlexItems, Button} from './Components.styled'
import {useState, useEffect} from 'react'

function PokeItem () {
  const [pokemon, setPokemon] = useState([])
  const [pokeFetch, setPokeFetch] = useState(0)
  const [type, setType] = useState('')
  const [name, setName] = useState('')  

  

  
  const fetchPokemon = async (id) =>{
    const random_poke_id = Math.floor(Math.random() * 150)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random_poke_id}`)
      
      if(res.status === 404){
          console.log('error');
        }else{      
          const data = await res.json()
          const type = data.types[0].type.name
          const name = data.name[0].toUpperCase() + data.name.slice(1)

          setPokemon(data)
          setType(type)  
          setName(name)
        }  
    }
    
       useEffect(() =>{   
          fetchPokemon()    

      },[pokeFetch])

        const handleClick = () => {
          setPokeFetch(pokeFetch + 1)    
    }
  

    const urlImg =` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    
    const color = () =>{
        if(type === 'fire'){
            return 'linear-gradient(135deg, #feccb1 0%,#ea5507 23%,#ea5507 23%,#f17432 36%,#f17432 57%,#feccb1 87%,#feccb1 87%,#fb955e 100%)'
        
        }else if (type === 'water'){
            return 'linear-gradient(45deg, #d0e4f7 0%,#73b1e7 20%,#0a77d5 50%,#539fe1 84%,#87bcea 100%)'
        }else if(type === ''){
            return
        }
         else if(type === 'grass'){
            return 'linear-gradient(45deg, #e6f0a3 19%,#c3d825 26%,#e6f0a3 34%,#e6f0a3 34%,#c3d825 39%,#c3d825 41%,#c3d825 41%,#c3d825 57%,#c3d825 57%,#c3d825 60%,#e6f0a3 66%,#c3d825 69%,#d2e638 71%,#dbf043 89%)'
        }
         else if(type === 'normal'){
              return 'linear-gradient(135deg, #f3e2c7 12%,#c19e67 47%,#b68d4c 51%,#b68d4c 51%,#e9d4b3 87%)'
        }
         else if(type === 'psychic'){
            return 'linear-gradient(45deg, #ffc578 28%,#fb9d23 79%,#fb9d23 88%)'
        }
         else if(type === 'poison'){
            return 'linear-gradient(45deg, #fb83fa 31%,#f9a9f8 31%,#e93cec 63%,#f927f6 73%)'
        }
         else if(type === 'rock'){
            return 'linear-gradient(135deg, #f5f6f6 0%,#dbdce2 5%,#dbdce2 5%,#b8bac6 19%,#b8bac6 26%,#b8bac6 26%,#b8bac6 54%,#dddfe3 98%,#dddfe3 98%,#f5f6f6 100%)'
        }
         else if(type === 'electric'){
            return 'linear-gradient(135deg, #fceabb 0%,#f8b500 10%,#f8b500 10%,#f8b500 18%,#ede889 25%,#fbdf93 82%,#fbdf93 82%,#f8b500 86%,#f8b500 86%,#fbdf93 90%)'
        }
         else if(type === 'ice'){
            return '(135deg, #b7deed 0%,#21b4e2 29%,#21b4e2 29%,#21b4e2 64%,#71ceef 85%,#b7deed 100%);'
        }
         else if(type === 'ghost'){
            return '(135deg, #cb60b3 15%,#960d66 24%,#ad1283 46%,#c99bbe 64%,#ad1283 76%,#ad1283 76%,#cb60b3 82%,#bc3c8b 88%)'
        }
         else if(type === 'bug'){
            return 'linear-gradient(45deg, #75890c 3%,#75890c 3%,#75890c 5%,#75890c 6%,#d7dba4 14%,#a4b357 52%,#a4b357 85%,#a4b357 85%)'
        }else {
            return 'linear-gradient(45deg, #d5cea6 0%,#b7ad70 21%,#b7ad70 22%,#b7ad70 34%,#c9c190 50%,#b7ad70 72%)'
        }
    } 


  return (
   <> 
    <Button onClick={handleClick}>Fetch</Button>

    <Card>
      <CardContent style={{background: color()}}>
          <ImageDiv>
              <FlexItems  className='nameAndHP' between>
                  <h2>{name}</h2>
                  <h3><span>HP</span>{Math.floor(Math.random() * (200 - 100 + 1) + 100)}</h3>
              </FlexItems>
                  <img src={urlImg} alt="" />
                  <p style={{boxShadow: '0 0 15px rgba(0,0,0,0.3'}}
                  >Lenght: {pokemon.height}",   Weight: {pokemon.weight}</p>
          </ImageDiv>

          <PokeContent>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis deserunt repellendus consequatur molestiae quia ullam repellat illum quasi laudantium?</p>
            <FlexItems className='some' between>
              <p style={{background: '#f4f4f4'}}>ID:{pokemon.id}</p>
              <p style={{background: color()}}>type: {type}</p>
              <p style={{background: '#f4f4f4'}}>base_exp:{pokemon.base_experience}</p>
          </FlexItems>
          </PokeContent>
      </CardContent>
    </Card>
  </>   
  )
}

export default PokeItem