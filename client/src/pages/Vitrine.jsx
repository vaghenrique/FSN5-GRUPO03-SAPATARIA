import React from "react";
import Card from "../components/Card";
import itens from "../assets/utils/itens.js"

import { Wrapper } from "../assets/wrappers/Vitrine";



const Vitrine = () => {
  return (
    <Wrapper>
      <div className="container-card">
        {itens.map((itens) => (
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
      
    </Wrapper>
  );
};

export default Vitrine;
