import { NavLink, useRouteError } from "react-router-dom";
import SVG from "../assets/404.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .svgStyle{
    width: 60vw;
  }
  .navLink{
    color:#222;
  }
`;
const ErrorPage = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <Header />
        <div className="content">
          <img src={SVG} alt="a" className="svgStyle" />
          <h3>A página que você tentou encontrar não existe</h3>
          <NavLink to = "/" className="navLink">Retornar para a página inicial</NavLink>
        </div>
        <Footer/>
      </Wrapper>
    );
  }
  return <div>Um erro desconhecido aconteceu !</div>;
};

export default ErrorPage;
