import styled from 'styled-components';
import { COLORS } from '../style-constants';

const MarkerInGroupStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin-left: -7px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  border: 2px solid #5D8B2F;
  border-radius: 50%;
  background-color: ${COLORS.gray64};
  background-size: cover;
  background-position: center;
`;

export default MarkerInGroupStyled;
