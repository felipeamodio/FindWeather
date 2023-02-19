import React from "react";
import { Alert, Image, SafeAreaView } from "react-native";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Text from "../../components/Text";
import theme from "../../theme";

import CloudAndThunderPNG from "../../assets/cloud-and-thunder.png";

import Styled from "./styles";

const LetterBold = () => (
  <Text
    fontFamily={theme.fontFamily.bold}
    fontSize={theme.fontSize.MD}
    color={theme.colors.gray[100]}
  >
    Weather
  </Text>
);

const Welcome = (): JSX.Element => {
  return (
    <Styled.Container>
      <SafeAreaView>
        <Divider top={60} />

        <Styled.ContainerImage>
          <Image source={CloudAndThunderPNG} />
        </Styled.ContainerImage>

        <Divider top={34} />

        <Text
          fontFamily={theme.fontFamily.semibold}
          fontSize={theme.fontSize.XXL}
          color={theme.colors.light.white}
          textAlign="center"
          style={{ width: 300, alignSelf: "center" }}
        >
          Descubra o Clima na sua Cidade
        </Text>

        <Divider top={24} />

        <Text
          fontFamily={theme.fontFamily.regular}
          fontSize={theme.fontSize.MD}
          color={theme.colors.gray[100]}
        >
          Com o Find
          <LetterBold /> nunca ficou tão fácil ter a previsão do tempo na palma
          da sua mão
        </Text>

        <Divider top={30} />

        <Button
          backgroundColor={theme.colors.dark[300]}
          borderColor={theme.colors.gray[300]}
          borderRadius={18}
          height={54}
          onPress={() => {}}
        >
          <Text
            fontFamily={theme.fontFamily.regular}
            fontSize={theme.fontSize.MD}
            color={theme.colors.light.white}
            textAlign="center"
          >
            Iniciar
          </Text>
        </Button>

        <Divider bottom={10} />
      </SafeAreaView>
    </Styled.Container>
  );
};

export default Welcome;
