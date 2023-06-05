import styled from 'styled-components';

const MarkerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: black;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s;

  ${'' /* &:hover {
    transform: scale(1.2);
  } */}
`;

export default MarkerStyled;
