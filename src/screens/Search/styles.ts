import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.dark[500]};
`;

export const ContainerInput = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 56px;
    border: 1px solid;
    border-color: ${theme.colors.light.white};
    border-radius: 12px;
    padding: 10px;
`;

export const Input = styled.TextInput`
    width: 100%;
    color: ${theme.colors.gray[200]};
    font-size: ${theme.fontSize.SM}px;
    padding-left: 10px;
`;

