import Carrossel from "../components/Carrossel";
import Card from "../components/Card";
import { Wrapper } from "../assets/wrappers/Home";
import Button from "../components/Button";
import itens from "../assets/utils/itens.js";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Carrossel />
      <Wrapper>
        <div className="parag-home">
          <p className="paragrafo_home">Seção Masculina</p>
          <div className="container-card">
            {itens.slice(0, 3).map((itens) => (
              <Card
                key={itens.id}
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
            <NavLink to="/vitrine">
              <Button name="Ver mais" href="/vitrine" onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}/>
            </NavLink>
          </div>
        </div>

        <div className="parag-home">
          <p className="paragrafo_home">Seção Feminina</p>
          <div className="container-card">
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
            <NavLink to="/vitrine">
              <Button name="Ver mais" href="/vitrine" onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}/>
            </NavLink>
          </div>
        </div>

        <div className="parag-home">
          <p className="paragrafo_home">Seção Infantil</p>
          <div className="container-card">
            {itens.slice(12, 15).map((itens) => (
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
            <NavLink to="/vitrine">
              <Button name="Ver mais" href="/vitrine" onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}/>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
