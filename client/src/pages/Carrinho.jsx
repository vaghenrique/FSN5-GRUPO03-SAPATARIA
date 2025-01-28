import Button from "../components/Button";
import { Wrapper } from "../assets/wrappers/Carrinho";
import TableComponent from "../components/Table";

const Carrinho = () => {
  return (
    <Wrapper>
      <div className="main">
        <h3>Esse é o seu carrinho de compras:</h3>
        <TableComponent />
        <Button name={"Cancelar compras"} />
      </div>
    </Wrapper>
  );
};

export default Carrinho;
