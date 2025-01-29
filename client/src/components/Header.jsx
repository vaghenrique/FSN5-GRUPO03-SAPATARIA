import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logoBranca from "../assets/img/logo-branca.png";
import { FaShoppingCart } from "react-icons/fa";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  color: white;
  margin: 0 25px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    transition: all linear 0.3s;
    color: #1900ff;
  }
`;
const ShoppingCart = styled.div`
  text-decoration: none;
  list-style: none;
  color: white;
  margin: 0 25px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 300px;
  display: block;

  @media screen and (max-width: 992px) {
    display: none;
  }
  &:hover {
    transition: all linear 0.3s;
    color: #1900ff;
  }
`;

const StyledLogo = styled.img`
  width: 200px;
`;

const Header = () => {
  return (
    <Navbar expand="lg" bg="primary">
      <Container>
        <Navbar.Brand href=".">
          <StyledLogo src={logoBranca} alt="Logo Loja" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <StyledNavLink to="/">Início</StyledNavLink>
            <StyledNavLink to="/vitrine">Vitrine</StyledNavLink>
            <StyledNavLink to="/carrinho"> Carrinho</StyledNavLink>
            <ShoppingCart className="shoppingCart">
              <FaShoppingCart onClick={()=> console.log("teste")} />
            </ShoppingCart>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
