import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.ScrollView.attrs<ScrollViewProps>(() => ({
  showsVerticalScrollIndicator: false
}))`
  flex: 1;
  background-color: ${theme.colors.dark[500]};
  padding: 0 16px;
`;

export const ContainerImage = styled.View`
  align-items: center;
`;
