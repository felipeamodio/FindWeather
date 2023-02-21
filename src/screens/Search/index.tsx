import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Divider from "../../components/Divider";
import HeaderNavigation from "../../components/HeaderNavigation";

import theme from "../../theme";
import * as S from "./styles";
import CardResult, { ICardResult } from "../../components/CardResult";
import { FindWeatherAPI } from "../../services/findWeatherAPI";

import NotFoundDestinationPNG from "../../assets/not-found-destination.png";
import { ActivityIndicator, Image, View } from "react-native";
import Text from "../../components/Text";
import { ISearchData } from "../../utils/search.interface";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";

type SearchScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Search"
>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const ErrorContent = () => (
  <View style={{ alignItems: "center" }}>
    <Image source={NotFoundDestinationPNG} />

    <Divider top={40} />

    <Text
      fontFamily={theme.fontFamily.semibold}
      fontSize={theme.fontSize.XS}
      color={theme.colors.gray[100]}
    >
      OPS!
    </Text>

    <Divider top={18} />

    <Text
      fontFamily={theme.fontFamily.semibold}
      fontSize={theme.fontSize.XS}
      color={theme.colors.gray[100]}
    >
      Não foi possível encontrar o local desejado!
    </Text>
  </View>
);

const Search = ({ navigation }: Props): JSX.Element => {
  const [isError, setIsError] = useState(false);
  const [textTyped, setTextTyped] = useState("");
  const [response, setResponse] = useState<ISearchData>(null);
  const [dataCard, setDataCard] = useState({} as ICardResult);

  const [isLoading, setIsLoading] = useState(false);

  const handleCallAPI = async () => {
    FindWeatherAPI.getForecast(textTyped)
      .then((res) => {
        setIsLoading(true);
        setTextTyped("");
        setResponse(res.data);

        const { location, current } = res.data;

        setDataCard({
          location: {
            name: location.name,
            region: location.region,
            country: location.country,
          },
          current: {
            temp_c: current.temp_c,
          },
          condition: {
            text: current.condition.text,
            icon: current.condition.icon,
          },
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error to get api data: ", error);

        setIsError(true);
        setTextTyped("");
        setIsLoading(false);
      });
  };

  return (
    <>
      <S.ScrollView>
        <S.Container>
          <Divider top={16} />

          <HeaderNavigation titlePage="Busca" onPress={() => navigation.navigate('Home')} />

          <Divider top={48} />

          <S.ContainerInputButton>
            <S.ContainerInput>
              <Ionicons
                name="search-outline"
                size={24}
                color={theme.colors.light.white}
              />

              <S.Input
                placeholder="Digite o nome de uma cidade"
                placeholderTextColor={theme.colors.gray[200]}
                value={textTyped}
                autoCapitalize="sentences"
                onChangeText={(text) => {
                  setTextTyped(text);
                  setIsError(false);
                  setResponse(null);
                }}
                onSubmitEditing={handleCallAPI}
              />
            </S.ContainerInput>

            <S.SearchButton onPress={handleCallAPI}>
              <Ionicons
                name="md-location-sharp"
                size={30}
                color={theme.colors.light.white}
              />
            </S.SearchButton>
          </S.ContainerInputButton>

          {isLoading && (
            <>
              <Divider top={40} />
              <ActivityIndicator size="small" color={theme.colors.light.white} />
            </>
          )}

          <Divider top={42} />

          {isError && <ErrorContent />}
          {response && !isError && !isLoading && (
            <CardResult data={dataCard} onPress={handleNavigateHome} />
          )}
        </S.Container>
      </S.ScrollView>
    </>
  );
};

export default Search;