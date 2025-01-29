import styled from "styled-components";



const buttonStyles = {
  primary: `
    background-color: #0d6efd;
    color: #ffff;
    border: none;

    &:hover {
      background-color: #b0d1ff;
      color: #222;
    }
  `,
  secondary: `
    background-color: #ffffff;
    color: #0d6efd;
    border: 1px solid #0d6efd;

    &:hover {
      color: #222;
    border: 1px solid #222;
    }
  `,
  tertiary: `
    border:none;
    color: #000;

    &:hover {
      background-color: #0d6efd;
      color: #fff;
    }
  `,
};

const StyledButton = styled.button`
  min-width: 100px;
  max-width: 200px;
  margin: 15px;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: all linear 0.3s;
  ${({ version }) => buttonStyles[version || "primary"]}
`;

const Button = ({ name, onClick, version }) => {
  return (
    <StyledButton onClick={onClick} version={version}>
      {name}
    </StyledButton>
  );
};
export default Button;
