import React from 'react'
import Card from '../components/Card'
import imagem from "../assets/img/endo_run.png"
import { Wrapper } from "../assets/wrappers/Vitrine"

const Vitrine = () => {
  return (
    <Wrapper>
      <div className='container-card'>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
      </div>
    </Wrapper>
    
  )
}

export default Vitrine