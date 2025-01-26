import styled from "styled-components";

const Wrapper = styled.footer``;
const Footer = () => {
  return (
    <Wrapper className="footer">
      <footer className="bg-body-tertiary text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Desenvolvido por:
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
