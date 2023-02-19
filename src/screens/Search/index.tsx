import React, {useState} from 'react';
import theme from '../../theme';
import * as S from './styles';

import {Ionicons} from '@expo/vector-icons';

export default function Search(){
    const [value, setValue] = useState();

    return (
        <S.Container>
            <S.ContainerInput>
                <Ionicons
                    name="location-sharp"
                    size={22}
                    color={theme.colors.gray[100]}
                />
                <S.Input 
                    placeholder='Digite a cidade ou país'
                    placeholderTextColor={theme.colors.gray[500]}
                    value={value}
                    onChangeText={(text: string) => setValue(text)}
                    autoCapitalize='words'
                />
                <Ionicons
                    name="search"
                    size={22}
                    color={theme.colors.gray[100]}
                />
            </S.ContainerInput>
        </S.Container>
    )
}