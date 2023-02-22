import styled from 'styled-components/native';
import theme from '../../theme';

export const ContainerTemperature = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerCard = styled.View`
  align-items: center;
  border: 1.5px ${theme.colors.dark[100]} solid;
  border-radius: 20px;
  padding: 5px 14px;
  background-color: ${theme.colors.dark[300]};
`;

export const Image = styled.Image`
  height: 40px; 
  width: 40px;
`;