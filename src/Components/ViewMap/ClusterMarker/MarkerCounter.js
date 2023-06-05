import styled from 'styled-components';

const MarkerCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #5D8B2F;
  height: 72px;
  width: 72px;
  border-radius: 100%;
  background-color: white;
  padding: 8px;
  margin-left: -10px;
  text-align: center;
  font-size: 14px;
  color: #5D8B2F;
  font-weight:700;
  border-radius: 50%;
  @media (max-width: 768px) {
    height: 50px;
    width: 50px; 
  }
`;

export default MarkerCounter;
