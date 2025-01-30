import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logoBranca from "../assets/img/logo-branca.png";
import { FaShoppingCart } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    color: #999999;
  }
`;

const StyledLogo = styled.img`
  width: 200px;
`;

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/vitrine?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <Navbar expand="lg" bg="primary">
      <Container>
        <Navbar.Brand href="/">
          <StyledLogo src={logoBranca} alt="Logo Loja" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Form inline onSubmit={handleSearch}>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Pesquisar"
                    className="mr-sm-2"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" style={{ backgroundColor: "#0657d1" }}>
                    <FaSearch />
                  </Button>
                </Col>
              </Row>
            </Form>
            <StyledNavLink to="/">Início</StyledNavLink>
            <StyledNavLink to="/vitrine">Vitrine</StyledNavLink>
            <StyledNavLink to="/carrinho">
              {" "}
              Carrinho <FaShoppingCart />
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
