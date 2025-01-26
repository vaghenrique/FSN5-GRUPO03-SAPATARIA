import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`

`;

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink to=".">Home</NavLink>
        </li>
        <li>
          <NavLink to="/vitrine">Vitrine</NavLink>
        </li>
        <li>
          <NavLink to="/carrinho">Carrinho</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
