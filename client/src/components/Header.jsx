import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logoBranca from "../assets/img/logo-branca.png";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  color: white;
  margin: 0 25px;
  font-size: 20px;

  &:hover {
    transition: all linear 0.3s;
    color: #b4b4b4;
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
            <StyledNavLink to="/carrinho">Carrinho</StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
