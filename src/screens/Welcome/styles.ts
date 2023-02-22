import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.SafeAreaView`
  background-color: ${theme.colors.dark[500]};
  flex: 1;
  justify-content: center;
`;

export const ContainerImage = styled.View`
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ContainerTextButton = styled.View`
  padding: 0 16px;
`;