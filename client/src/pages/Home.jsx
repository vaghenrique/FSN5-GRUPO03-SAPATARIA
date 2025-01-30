import React from 'react'
import Carrossel from '../components/Carrossel'
import Card from '../components/Card'
import { Wrapper } from '../assets/wrappers/Home'
import imagem from "../assets/img/endo_run.png"
import Button from '../components/Button'

const Home = () => {
  return (
    <>
      <Carrossel />
      <Wrapper>
        <div className='parag-home'>
          <p className='paragrafo_home'>Seção Masculina</p>
          <div className='container-card'>
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
          </div>
          <div className="botao-container">
            <Button name="Ver mais" />
          </div>
        </div>

        <div className='parag-home'>
          <p className='paragrafo_home'>Seção Feminina</p>
          <div className='container-card'>
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
          </div>
          <div className="botao-container">
            <Button name="Ver mais" />
          </div>
        </div>

        <div className='parag-home'>
          <p className='paragrafo_home'>Seção Infantil</p>
          <div className='container-card'>
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
            <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem} />
          </div>
          <div className="botao-container">
            <Button name="Ver mais" />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Home