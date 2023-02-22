import { Platform, StatusBar, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const getStatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const Container = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight}px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.dark};
  padding: 0 16px;
`;

export const ContainerInputButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.dark[400]};
  padding: 15px 8px;
  border-radius: 11px;
  width: 80%;
`;

export const Input = styled.TextInput`
  font-family: ${theme.fontFamily.regular};
  color: ${theme.colors.light.white};
  font-size: ${theme.fontSize.XS}px;
  margin: 0 8px 0 8px;
  width: 80%
`;

export const SearchButton = styled.TouchableOpacity<TouchableOpacityProps>`
  background-color: ${theme.colors.dark[400]};
  padding: 13px 9px;
  border-radius: 11px;
  width: 55px;
  align-items: center;
`;