import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const getStatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const Container = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight}px;
  background-color: ${theme.colors.dark[400]};
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 53px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.dark};
`;

export const PaddingHorizontal = styled.View`
  padding: 0 16px;
`

export const ContainerSummaryTemperature = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.Image`
  width: 119px;
  height: 119px;
`;

export const ContainerWeekTemperature = styled.View`
  padding: 0 16px;
`;