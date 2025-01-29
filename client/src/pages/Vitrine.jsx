import Card from "../components/Card";
import imagem from "../assets/img/endo_run.png";
import { Wrapper } from "../assets/wrappers/Vitrine";

const itens = [
  {
    nome: "Endo Run",
    preco_big: "222.",
    preco_small: "99",
    id: 1,
    link: { imagem },
  },
  {
    nome: "Endo Run",
    preco_big: "222.",
    preco_small: "99",
    id: 2,
    link: { imagem },
  },
  {
    nome: "Endo Run",
    preco_big: "222.",
    preco_small: "99",
    id: 3,
    link: { imagem },
  },
];

const Vitrine = () => {
  return (
    <Wrapper>
      <div className="container-card">
        {/* <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card>
          <Card nome={"Endo Run"} preco_big={"R$ 227."} preco_small={"99"} link={imagem}></Card> */}

        {itens.map((itens) => (
          <Card
            key={itens.id}
            nome={itens.nome}
            link={itens.link}
            preco_big={itens.preco_big}
            preco_small={itens.preco_small}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Vitrine;
