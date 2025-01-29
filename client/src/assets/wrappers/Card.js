import styled from "styled-components";

export const Wrapper = styled.div`
.card{
	position: relative;
    width: 320px;
    height: 420px;
    background: #0D6EFD;
	border-radius: 20px;
	overflow: hidden;
    cursor: pointer;
}

.card:before{
	content: '';
	position: absolute;
	top: -50%;
    width: 100%;
    height: 100%;
    background:rgb(129, 179, 253);
    transform: skewY(345deg);
    transition: 0.5s;
    
}

.card:hover::before{
    transform: skewY(390deg);
    top: -70%;
}

.card::after{
    content: 'FSN5';
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 5.5em;
    color: rgba(0, 0, 0, 0.1);
}

.card .imgBx{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    z-index: 1;
}

.card .imgBx img{
    max-width: 80%;
    transition: 0.5s;
}

.card:hover .imgBx img{
    max-width: 70%;
}

.card .contentBx{
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index:1;

}

.card .contentBx h3{
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.card .contentBx span{
    font-size: 18px;
}

.card .contentBx .price{
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 1px;
}

.card .contentBx .buy{
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

.card:hover .contentBx .buy{
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

.cart-icon a:hover {
    color: #0D6EFD;
    transition: 0.5s;
}

.cart-icon a{
    text-decoration: none;
    color: #fff;
}
`