import React from 'react'
import { Wrapper } from "../assets/wrappers/Card"
import { MdAddShoppingCart } from "react-icons/md";

const Card = ({nome, preco_big, preco_small, link, id}) => {
  return (
    <Wrapper>
      <div className='card'>
          <div className='cart-icon'>
              <a href="#"><MdAddShoppingCart /></a>
          </div>
          <div className='imgBx'>
              <img src={link}/>
          </div>
          <div className='contentBx'>
              <h3>{nome}</h3>
              <h2 className='price'>{preco_big}<span>{preco_small}</span></h2>
              <a href="#" className='buy'>Mais Detalhes</a>
          </div>
      </div>
    </Wrapper>
    
  )
}

export default Card