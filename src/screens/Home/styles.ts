import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const getStatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;


export const Container = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight}px;
`;

export const ContainerEmptyState = styled.View`
  align-items: center;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.dark[500]};
  padding: 0 16px;
`;

export const LocationIconContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-start
`;

export const LocationTextContainer = styled.View``;

export const LocationCityCountryContainer = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  align-items: center;
`;

export const TodayAnd7NextDaysContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Next7DaysContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6
}))`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

export const Separator = styled.View`
  margin-right: 10px;
`;

export const ContainerTemperature = styled.View`
  flex-direction: row;
  align-self: center;
`;