import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  border: 1px ${theme.colors.gray[600]} solid;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-radius: 18px;
  padding: 10px 20px;
`;

export const ContainerItem = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.View`
  border-right-color: ${theme.colors.gray[600]};
  border-right-width: 1px;
  height: 80%;
  align-self: center;
`;