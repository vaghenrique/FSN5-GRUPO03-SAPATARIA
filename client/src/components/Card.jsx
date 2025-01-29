import { Wrapper } from "../assets/wrappers/Card";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const Card = ({ nome, preco_big, preco_small, link, id, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const produto = {
      id,
      nome,
      price,
      link,
    };

    dispatch(addItem(produto));
  };

  return (
    <Wrapper>
      <div className="card">
        <div className="cart-icon">
          <MdAddShoppingCart onClick={handleAddToCart} />
        </div>
        <div className="imgBx">
          <img src={link} alt={nome} />
        </div>
        <div className="contentBx">
          <h3>{nome}</h3>
          <h2 className="price">
            {preco_big}
            <span>{preco_small}</span>
          </h2>
          <a href="#" className="buy">
            Mais Detalhes
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
