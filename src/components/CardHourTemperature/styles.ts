import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  
`;

export const ContainerTemperature = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerCard = styled.View`
  align-items: center;
  border: 1.5px ${theme.colors.dark[100]} solid;
  border-radius: 20px;
  padding: 8px 18px;
  background-color: ${theme.colors.dark[300]};
`;