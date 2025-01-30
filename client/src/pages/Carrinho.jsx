import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../store/cartSlice";
import { Wrapper } from "../assets/wrappers/Carrinho";
import TableComponent from "../components/Table";

const Carrinho = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const total = cartItems.reduce(
    (acc, item) => acc + (parseFloat(item.price) || 0),
    0
  );


  return (
    <Wrapper>
      <div className="main">
        <h3>Esse é o seu carrinho de compras:</h3>
        <TableComponent items={cartItems} onRemove={handleRemoveItem} />
        <div className="buttons">
          <Button
            name={"Limpar carrinho"}
            onClick={handleClearCart}
            version={"secondary"}
          />
          <Button
            name={"Finalizar compra"}
            onClick={""}
            version={"primary"}
          />
        </div>
      </div>
      <div className="totalContainer">
      <h3>Total: R$ {total.toFixed(2)}</h3>
      </div>
    </Wrapper>
  );
};

export default Carrinho;
