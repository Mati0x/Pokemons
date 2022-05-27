import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const  CardContainer = styled.div`
    display:flex;
    flex-wrap:wrap; 
    justify-content: center;
    padding: 1rem 1rem;
    
    div{
        margin:.3rem;
    }
`
export const Card = styled.div`
    display:block;
    max-width: 420px;
    max-height:800px;
    margin:0 auto;
    margin-top:2rem;
    text-align: center;
    color: #262626;
    padding: .3rem .3rem;
    border:1px solid #f4f4f4;
    border-radius:15px;
    box-shadow: 0 0 12px  #f4f4f4;
    background-color:#f4f4f4;
`
export const MiniCard = styled.div`
    width: 160px;
    height:300px;
    text-align: center;
    color: #262626;
    padding: .3rem .3rem;
    border:1px solid #f4f4f4;
    border-radius:15px;
    box-shadow: 0 0 12px  #f4f4f4;
    background-color:#f4f4f4;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    img{
        width:80%;
        position:relative;
        object-fit:cover;
        /* background-color: #f4f4f4; */ }
        
    
/*     
    &:after{
        content: "";
        position: absolute;
        top: 35%;
        left: 50%;
        transform:translate(-50%, -50%);
        height: 80px;
        width: 80px;
        border-radius: 50%;
        background-color: rgba(255,255,255, 0.1);
        z-index: -2;
    } */

    /* &:before{
        content: "hello";
        font-size: 2rem;
        background-color: #262626;
        z-index:100;
        position:absolute;
        top: 0%;
        left:0%;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        transition: all .5s ease;
        
    } */

    /* &:hover::before{
        opacity:0;
        /* visibility:hidden; */
`

export const CardContent = styled.div`
    display:flex;
    flex-direction:column;
    padding:1rem 1rem;
    border-radius:15px;
`
export  const ImageDiv = styled.div`
    width:100%;

    h2{
        display:inline;
        font-size: 2.5rem;
        padding-left:3rem;
    }
    h3{
        font-size: 2rem;
        
    }
    img{
        width:100%;
          
    }
    p{
        border-bottom-right-radius:10px;
        border-bottom-left-radius:10px;
    }

    span{
        font-size:.9rem;
    }
`
export const PokeContent =styled.div`
    text-align: justify;
    margin-top: 1.5rem ;

    p{
        line-height:1.2;
        padding: 0 1.5rem;
        font-style: italic;
    }   
`
export const FlexItems =styled.div`
    display:flex;
    align-items: center;
    justify-content: ${props => props.between ? 'space-between' : 'space-around'};
    background-color: ${props => props.bg? '#ccc' : ''};

    &.nameAndHP{
        /* border:3px solid black; */
        margin-bottom:.2rem;
    }
    
    &.some{
        display: flex;
        justify-content:space-around;
       
        padding-top:1rem;
        
        
        p{
            display: block;
            text-align:center;
            margin:.1rem;
            width:100%; 
            font-size: .8rem;
            padding:0;
            padding:.1rem .5rem;
            border-radius:50px;
            font-weight: bold;
            border: 1px solid #404040 ;
    
        }
    }

`
const upDown = keyframes`
    from{
        transform: translateY(-150px);
        
    }
     to{
        transform: translateY(150px);
       ;
    }
`


export const Button = styled.button`
    position: fixed;
    top: 50%;
    left:13%;
    width:100px;
    height:100px;
    border-radius: 50%;
    font-size: 1.5rem;
    font-family:inherit;
    border:3px solid rgba(255,255,255,0.5);
    background:linear-gradient(to bottom, #ff1a00 3%,#ff1a00 8%,#ff1a00 8%,#ffe5e2 77%);

    animation:${upDown} 1s  alternate infinite ;
   

`


export const FlexPokeCards = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    border: 1px solid red;
`
export const FlexCards = styled.div`
    display: inline-flex;
    margin: 0 auto;
    border:1px solid orange;
    width:200px;
    
`

export const NavBarStyled = styled.nav`
    background-color:rgba(255,255,255,0.08);
   
        ul{
            display: flex;
            justify-content: space-around;
            list-style-type: none;
            padding: 1rem 0;
        }

        li{
            display: flex;
            flex-direction: column;
            align-items: center; 
        }

        p{
            margin-top: 1rem;
            padding-bottom: .3rem;

            &.border{
                border-bottom: 1px solid rgba(255,255,255,0.7);
            }
        
        }


`
