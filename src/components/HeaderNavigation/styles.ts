import styled from 'styled-components/native';
import { TouchableOpacityProps } from "react-native"
import theme from '../../theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: Number(0.70),
}))<TouchableOpacityProps>`
  padding: 12px;
  border-color: ${theme.colors.gray[600]};
  border-width: 1px;
  border-radius: 25px;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;