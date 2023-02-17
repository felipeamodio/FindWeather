import React, {useState} from 'react';
import * as S from './styles';

import Button from '../../components/Button';
import { Alert } from 'react-native';

export default function Home(){
    const [key, setKey] = useState(123);

    return(
        <S.Container>
            <S.Title>HOME</S.Title>
            <Button 
                backgroundColor={'#000'} 
                borderRadius={8} 
                height={40}
                // children="Enviar"
                borderColor='#fff'
                key={key}
                onPress={() => Alert.alert('clicou')}>
                    <S.Title>Enviar</S.Title>
                </Button>
        </S.Container>
    );
}