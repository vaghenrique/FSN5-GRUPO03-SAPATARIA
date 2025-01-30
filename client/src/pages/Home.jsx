import React from 'react'
import Carrossel from '../components/Carrossel'
import Card from '../components/Card'
import { Wrapper } from '../assets/wrappers/Home'
import imagem from "../assets/img/endo_run.png"
import Button from '../components/Button'
import itens from "../assets/utils/itens.js"

const Home = () => {
  return (
    <>
      <Carrossel />
      <Wrapper>
        <div className='parag-home'>
          <p className='paragrafo_home'>Seção Masculina</p>
          <div className='container-card'>
            {itens.slice(0, 3).map((itens) => (
              <Card
                nome={itens.nome}
                preco_big={itens.preco_big}
                preco_small={itens.preco_small}
                link={itens.link}
                id={itens.id}
                price={itens.price}
              />
            ))}
          </div>
          <div className="botao-container">
            <Button name="Ver mais" />
          </div>
        </div>

        <div className='parag-home'>
          <p className='paragrafo_home'>Seção Feminina</p>
          <div className='container-card'>
            {itens.slice(3, 6).map((itens) => (
              <Card
                nome={itens.nome}
                preco_big={itens.preco_big}
                preco_small={itens.preco_small}
                link={itens.link}
                id={itens.id}
                price={itens.price}
              />
            ))}
          </div>
          <div className="botao-container">
            <Button name="Ver mais" />
          </div>
        </div>

        <div className='parag-home'>
          <p className='paragrafo_home'>Seção Infantil</p>
          <div className='container-card'>
            {itens.slice(6, 9).map((itens) => (
              <Card
                nome={itens.nome}
                preco_big={itens.preco_big}
                preco_small={itens.preco_small}
                link={itens.link}
                id={itens.id}
                price={itens.price}
              />
            ))}
          </div>
          <div className="botao-container">
            <Button name="Ver mais" href="/vitrine" />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Home