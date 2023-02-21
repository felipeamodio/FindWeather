import styled from 'styled-components/native';
import { TouchableOpacityProps } from "react-native";
import theme from '../../theme';

export const ContainerButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: Number(0.75)
}))<TouchableOpacityProps>`
  background-color: ${theme.colors.dark[300]};
  padding: 15px 12px;
  width: 65%;
  border-radius: 20px;
  border-color: ${theme.colors.dark[100]};
  border-width: 1.5px
`;

export const ContainerTemperatureImage = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTemperature = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  height: 45px;
  width: 45px;
  align-self: flex-end;
`;