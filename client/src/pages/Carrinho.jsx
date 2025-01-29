import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../store/cartSlice"; 
import { Wrapper } from "../assets/wrappers/Carrinho";
import TableComponent from "../components/Table";


const Carrinho = () => {

   const cartItems = useSelector((state) => state.cart.items);
   const dispatch = useDispatch();

  //  const handleAddItem = (item) => {
  //    dispatch(addItem(item));
  //  };

   const handleRemoveItem = (itemId) => {
     dispatch(removeItem(itemId));
   };

   const handleClearCart = () => {
     dispatch(clearCart());
   };

  return (
    <Wrapper>
      <div className="main">
        <h3>Esse é o seu carrinho de compras:</h3>
        <TableComponent items={cartItems} onRemove={handleRemoveItem} />
        {console.log("Itens no carrinho:", cartItems)}
        <Button
          name={"Finalizar compra"}
          onClick={""}
          version={"secondary"}
        />
        <Button
          name={"Limpar carrinho"}
          onClick={handleClearCart}
          version={"primary"}
        />
      </div>
    </Wrapper>
  );
};

export default Carrinho;
