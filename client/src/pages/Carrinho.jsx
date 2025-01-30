import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../store/cartSlice";
import { Wrapper } from "../assets/wrappers/Carrinho";
import TableComponent from "../components/Table";
import { FaShoppingCart } from "react-icons/fa";

const Carrinho = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const total = cartItems.reduce(
    (acc, item) =>
      acc + (Number(item.price) || 0) * (Number(item.quantidade) || 1),
    0
  );

  return (
    <Wrapper>
      <div className="main">
        <h3>Esse é o seu carrinho de compras:</h3>

        {cartItems.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "20px",
            }}
          >
            <FaShoppingCart /> Seu carrinho não possui nenhum item.
          </p>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className="totalContainer">
        <h3>Total: R$ {total.toFixed(2)}</h3>
      </div>
    </Wrapper>
  );
};

export default Carrinho;
