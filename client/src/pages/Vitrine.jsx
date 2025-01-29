import React from 'react'
import Card from '../components/Card'
import imagem from "../assets/img/endo_run.png"
import addidas_cp from "../assets/img/adidas-cp.png"
import olympikus_vertical from "../assets/img/olymoikus_vertical.png"
import fila_street from "../assets/img/fila_street.png"
import fila_tormo from "../assets/img/fila_tormo.png"
import grand_court from "../assets/img/grand_court.png"
import new_balance from "../assets/img/new_balance.png"
import nike_air_max from "../assets/img/nike_air_max.png"
import nike_jordan from "../assets/img/nike-jordan.png"
import olympikus_aqua from "../assets/img/olympikus_aqua.png"
import olympikus_difuse from "../assets/img/olympikus_difuse.png"
import poly_joy from "../assets/img/poly_joy.png"

import { Wrapper } from "../assets/wrappers/Vitrine"

const itens = [
  {nome:"Endo Run", preco_big:"R$ 227.", preco_small:"99", link:imagem, id:1},
  {nome:"Adidas Manchester", preco_big:"R$ 899.", preco_small:"99", link:addidas_cp, id:2},
  {nome:"Olympikus Vertical", preco_big:"R$ 307.", preco_small:"83", link:olympikus_vertical, id:3},
  {nome:"Fila Street Fit", preco_big:"R$ 360.", preco_small:"00", link:fila_street, id:4},
  {nome:"Fila Tormo", preco_big:"R$ 369.", preco_small:"99", link:fila_tormo, id:5},
  {nome:"grand Court 2.0", preco_big:"R$ 219.", preco_small:"99", link:grand_court, id:6},
  {nome:"New Balance 480", preco_big:"R$ 499.", preco_small:"99", link:new_balance, id:7},
  {nome:"Nike Air Max Intrlk", preco_big:"R$ 599.", preco_small:"99", link:nike_air_max, id:8},
  {nome:"Jordan one take 4", preco_big:"R$ 669.", preco_small:"99", link:nike_jordan, id:9},
  {nome:"Olympikus Acqua", preco_big:"R$ 189.", preco_small:"00", link:olympikus_aqua, id:10},
  {nome:"Olympikus Difuse 4", preco_big:"R$ 179.", preco_small:"99", link:olympikus_difuse, id:11},
  {nome:"Polo joy casual", preco_big:"R$ 99.", preco_small:"90", link:poly_joy, id:10},
]

const Vitrine = () => {
  return (
    <Wrapper>
      <div className='container-card'>
          {itens.map((itens)=>(
            <Card nome={itens.nome} preco_big={itens.preco_big} preco_small={itens.preco_small} link={itens.link} id={itens.id}/>
          ))}
      </div>
    </Wrapper>
    
  )
}

export default Vitrine