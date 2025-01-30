import styled from "styled-components";

export const Wrapper = styled.div`
  .card {
    position: relative;
    width: 320px;
    height: 420px;
    background: #0d6efd;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  .card:before {
    content: "";
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background: rgb(129, 179, 253);
    transform: skewY(345deg);
    transition: 0.5s;
  }

  .card:hover::before {
    transform: skewY(390deg);
    top: -70%;
  }

  .card::after {
    content: "FSN5";
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 5.5em;
    color: rgba(0, 0, 0, 0.1);
  }

  .card .imgBx {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    z-index: 1;
  }

  .card .imgBx img {
    max-width: 80%;
    transition: 0.5s;
  }

  .card:hover .imgBx img {
    max-width: 70%;
  }

  .card .contentBx {
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }

  .card .contentBx h3 {
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .card .contentBx span {
    font-size: 18px;
  }

  .card .contentBx .price {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .card .contentBx .buy {
    position: relative;
    top: 200px;
    opacity: 0;
    padding: 10px 30px;
    margin-top: 15px;
    color: #fff;
    text-decoration: none;
    background: rgb(129, 179, 253);
    border-radius: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.5s;
  }

  .card:hover .contentBx .buy {
    top: 0px;
    opacity: 1;
  }

  .cart-icon {
    position: absolute;
    right: 10px;
    font-size: 250%;
    color: #fff;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;
  }

  .cart-icon:hover {
    color: #0d6efd;
    transition: 0.5s;
  }

/* =============================================================== */

.modal-window{
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color:rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal{
    width: 60%;
    height: 80%;
    min-width: 300px;
    min-height: 300px;
    background-color: rgb(129, 179, 253);
    padding: 50px;
    border-radius: 20px;
    position: relative;
    z-index: 10000;
    animation: fade-in 0.5s;
    display: block;
    overflow: auto; /* Mantém o scroll funcional */
    scrollbar-width: none; /* Para Firefox */
  }

.close-button{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    background-color: #0D6EFD;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

@keyframes fade-in{
    from{
        opacity: 0;
        transform: translate3d(0, -20px, -5px);
    }
    to{
        opacity: 1;
        transform: translate3d(0,0,0);
    }
}

/* ================================================================================== */

.row{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.col-2{
    flex-basis: 50%;
    min-width: 300px;
}

.col-2 h1{
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
}

.btn{
    display: inline-block;
    background: #0D6EFD;
    color: #fff;
    cursor: pointer;
    padding:8px 30px;
    margin: 30px 0px;
    border-radius: 30px;
    transition: background 0.5s;
}

.btn:hover{
    background:rgb(14, 69, 153);
}

.small-container{
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

h4{
    font-weight: normal;
}

h6{
  color: #fff;
  cursor: pointer;
}

.col-4 p{
    font-size: 14px;
}

.col-4:hover{
    transform:translateY(-5px);
}

.single-product{
    margin-top: 0px;
}
.single-product .col-2 img{
    padding:0;
}
.single-product .col-2{
    padding:20px;
}
.single-product h4{
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
}
.single-product select{
    display: block;
    padding: 10px;
    margin-top: 20px;
}
.single-product input{
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid #0D6EFD;
    color: #555;
}

input:focus{
    outline: none;
}

.small-img-row{
   display:flex;
    justify-content: space-between;
}
.small-img-col{
    flex-basis: 24%;
    cursor: pointer;
}

.small-img{
    width: 100%;
}

#productImg{
    width: 100%;
}

@media only screen and (max-width:600px){
    .row{
        text-align: center;
    }
    .col-2{
        flex-basis: 100%;
    }
    .single-product .row{
        text-align: left;
    }
    .single-product .col-2{
        padding: 20px 0;
    }
    .single-product h1{
        font-size: 20px;
        line-height: 32px;
    }
    

}
`;

