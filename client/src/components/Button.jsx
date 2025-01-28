import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: gainsboro;
  border: none;
  min-width: 100px;
  max-width: 200px;
  margin: 15px;
  padding: 10px;
  border-radius: 15px;

  &:hover {
    transition: all linear 0.3s;
    background-color: #0d6efd;
    color: #fff;
  }
`;



const Button = ({name,action}) => {
  return (
    <StyledButton>{name}</StyledButton>
  )
}
export default Button