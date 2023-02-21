import React from "react";
import { Image, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Text from "../../components/Text";
import theme from "../../theme";

import CloudAndThunderPNG from "../../assets/cloud-and-thunder.png";

import * as S from "./styles";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";
import { USER_FIRST_TIME } from "../../storage/storage.config";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Welcome"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const LetterBold = () => (
  <Text
    fontFamily={theme.fontFamily.bold}
    fontSize={theme.fontSize.MD}
    color={theme.colors.gray[100]}
  >
    Weather
  </Text>
);

const Welcome = ({ navigation }: Props): JSX.Element => {
  const handleGoneThroughWelcome = async () => {
    await AsyncStorage.setItem(USER_FIRST_TIME, "no").catch((error) => {
      console.log("Error inserting USER_FIRST_TIME into storage: ", error);
    });
  };

  return (
    <S.Container>
      <SafeAreaView>
        <Divider top={60} />

        <S.ContainerImage>
          <Image source={CloudAndThunderPNG} />
        </S.ContainerImage>

        <Divider top={34} />

        <Text
          fontFamily={theme.fontFamily.semibold}
          fontSize={theme.fontSize.XXL}
          color={theme.colors.light.white}
          style={{ width: 300, alignSelf: "center" }}
        >
          Descubra o Clima na sua Cidade
        </Text>

        <Divider top={24} />

        <Text
          fontFamily={theme.fontFamily.regular}
          fontSize={theme.fontSize.MD}
          color={theme.colors.gray[100]}
          textAlign="center"
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
          onPress={() => {
            navigation.navigate("Home");
            handleGoneThroughWelcome();
          }}
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
    </S.Container>
  );
};

export default Welcome;