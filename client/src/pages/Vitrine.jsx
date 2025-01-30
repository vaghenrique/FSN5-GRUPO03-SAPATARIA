import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import itens from "../assets/utils/itens.js"
import { Wrapper } from "../assets/wrappers/Vitrine";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Vitrine = () => {

  const query = useQuery();
  const search = query.get("search")?.toLowerCase() || "";

  const produtosFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(search)
  );

  return (
    <Wrapper>
      <p className="vitrine-p">Vitrine</p>
      <div className="container-card">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((item) => (
            <Card
              key={item.id}
              nome={item.nome}
              preco_big={item.preco_big}
              preco_small={item.preco_small}
              link={item.link}
              id={item.id}
              price={item.price}
              photo_one={item.photo_one}
              photo_two={item.photo_two}
              photo_three={item.photo_three}
              photo_four={item.photo_four}
              photo_main={item.photo_main}
            />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </Wrapper>
  );
};

export default Vitrine;
