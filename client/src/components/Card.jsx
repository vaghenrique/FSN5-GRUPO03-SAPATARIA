import { Wrapper } from "../assets/wrappers/Card";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Card = ({ nome, preco_big, preco_small, link, id, price, photo_main, photo_one, photo_two, photo_three, photo_four}) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const [mainImage, setMainImage] = useState(link);

  const toggleModal = () => {
    setModal(!modal);
    setMainImage(link);
  }

  const handleAddToCart = () => {
    const produto = {
      id,
      nome,
      price,
      link,
    };

    dispatch(addItem(produto));

    toast.success("O produto foi adicionado ao carrinho com sucesso !");
  };

  return (
    <Wrapper>
      <ToastContainer />
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
          <a className="buy" onClick={toggleModal}>
            Mais Detalhes
          </a>
        </div>
      </div>

      {modal && (
        <div className='modal-window' id='modal-window'>
            <div className='modal' id="modal">
                <button className='close-button' id='close-button' onClick={toggleModal}>X</button>
                <div className="small-container single-product">
                  <div className="row">
                    <div className="col-2">
                      <img src={mainImage} alt={nome} id="productImg"/>

                      <div className="small-img-row">
                        <div className="small-img-col">
                          <img src={photo_one} alt={nome} onClick={() => setMainImage(photo_one)} className="small-img"/>
                        </div>
                        <div className="small-img-col">
                          <img src={photo_two} alt={nome} onClick={() => setMainImage(photo_two)} className="small-img"/>
                        </div>
                        <div className="small-img-col">
                          <img src={photo_three} alt={nome} onClick={() => setMainImage(photo_three)} className="small-img"/>
                        </div>
                        <div className="small-img-col">
                          <img src={photo_four} alt={nome} onClick={() => setMainImage(photo_four)} className="small-img"/>
                        </div>
                      </div>
                    </div>

                    <div className="col-2">
                    <h6 onClick={toggleModal}>Início / Produtos</h6>
                        <h1>{nome}</h1>
                        <h4>R$ {price}</h4>
                        <select>
                            <option>Escolha o tamanho</option>
                            <option>37</option>
                            <option>38</option>
                            <option>39</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option>43</option>
                        </select>
                        <input type="number" value="1" min="1" max="10"/>
                        <a class="btn">Comprar</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      )}

    </Wrapper>
  );
};

export default Card;
