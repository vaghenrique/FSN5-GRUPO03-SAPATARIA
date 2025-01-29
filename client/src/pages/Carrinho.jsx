import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../store/cartSlice"; 
import { Wrapper } from "../assets/wrappers/Carrinho";
import TableComponent from "../components/Table";


const Carrinho = () => {
/* 
   const cartItems = useSelector((state) => state.cart.items);
   const dispatch = useDispatch();

   const handleAddItem = (item) => {
     dispatch(addItem(item));
   };

   const handleRemoveItem = (itemId) => {
     dispatch(removeItem(itemId));
   };

   const handleClearCart = () => {
     dispatch(clearCart());
   };
 */
  return (
    <Wrapper>
      <div className="main">
        <h3>Esse é o seu carrinho de compras:</h3>
        <TableComponent />
        <Button name={"Adicionar ao carrinho"} onClick={clearCart} version={"primary"} />
        <Button name={"Detalhes"} onClick={clearCart} version={"secondary"} />
        <Button name={"Botao dois"} onClick={clearCart} version={"tertiary"} />
        
      </div>
    </Wrapper>
  );
};

export default Carrinho;
