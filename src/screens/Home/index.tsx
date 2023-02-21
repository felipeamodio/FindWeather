import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SectionList,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Text from "../../components/Text";
import Divider from "../../components/Divider";
import RainingPNG from "../../assets/raining.png";
import WeatherDescription from "../../components/WeatherDescription";
import CardHourTemperature from "../../components/CardHourTemperature";

import theme from "../../theme";
import * as S from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import DropMiniaturePNG from "../../assets/drop-miniature.png";
import WindMiniaturePNG from "../../assets/wind-miniature.png";
import RainingCloudPNG from "../../assets/raining-cloud-miniature.png";
import ClimateChangePNG from "../../assets/climate-change.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";
import { useFocusEffect } from "@react-navigation/native";
import {
  ICurrent,
  ILocation,
  ISearchData,
  IForecastData,
} from "../../utils/search.interface";
import { CITY_NAME } from "../../storage/storage.config";
import { FindWeatherAPI } from "../../services/findWeatherAPI";
import { formatDate } from "../../utils/formatDate";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface IFullContentData {
  location: ILocation;
  current: ICurrent;
  forecast: {
    forecastday: Array<IForecastData>;
  };
  date: string;
}

const EmptyStateContent = ({ navigation }: Props) => {
  return (
    <S.Container>
      <S.ContainerEmptyState>
        <Divider top={60} />

        <Text
          fontFamily={theme.fontFamily.regular}
          fontSize={theme.fontSize.XXL}
          color={theme.colors.light.white}
        >
          Find
          <Text
            fontFamily={theme.fontFamily.bold}
            fontSize={theme.fontSize.XXL}
            color={theme.colors.light.white}
          >
            Weather
          </Text>
        </Text>

        <Divider top={100} />

        <Image source={ClimateChangePNG} />

        <Divider top={100} />

        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          activeOpacity={0.75}
        >
          <Text
            fontFamily={theme.fontFamily.regular}
            fontSize={theme.fontSize.MD}
            color={theme.colors.gray[100]}
            style={{ textDecorationLine: "underline" }}
          >
            Selecione aqui um local e {"\n"} encontre o clima em tempo real
          </Text>
        </TouchableOpacity>
      </S.ContainerEmptyState>
    </S.Container>
  );
};

const FullContent = ({
  location,
  current,
  forecast,
  date,
}: IFullContentData) => {
  const { humidity, wind_kph } = current;
  const { daily_chance_of_rain } = forecast.forecastday[0].day;

  const dataWeatherDescription = [
    {
      id: 1,
      icon: DropMiniaturePNG,
      value: `${humidity}%`,
      text: "Umidade",
    },

    {
      id: 2,
      icon: WindMiniaturePNG,
      value: `${Math.floor(wind_kph)}km/h`,
      text: "Veloc. Vento",
    },

    {
      id: 3,
      icon: RainingCloudPNG,
      value: `${Math.floor(daily_chance_of_rain)}%`,
      text: "Chuva",
    },
  ];

  return (
    <>
      <S.Container>
        <Divider top={27} />

        <S.LocationIconContainer>
          <Ionicons
            name="location-sharp"
            size={22}
            color={theme.colors.light.white}
          />

          <S.LocationTextContainer>
            <S.LocationCityCountryContainer>
              <Text
                fontFamily={theme.fontFamily.regular}
                fontSize={theme.fontSize.SM}
                color={theme.colors.light.white}
              >
                {""} {location.name}, {""}
              </Text>

              <Text
                fontFamily={theme.fontFamily.regular}
                fontSize={theme.fontSize.SM}
                color={theme.colors.light.white}
              >
                {location.country}
              </Text>
            </S.LocationCityCountryContainer>

            <Divider top={3} />

            <Text
              fontFamily={theme.fontFamily.regular}
              fontSize={theme.fontSize.XS}
              color={theme.colors.gray[100]}
            >
              {""} {date}
            </Text>
          </S.LocationTextContainer>
        </S.LocationIconContainer>

        <Divider top={19} />

        <S.ImageContainer>
          <Image source={RainingPNG} />
        </S.ImageContainer>

        <Divider top={10} />

        <S.ContainerTemperature>
          <Text
            fontFamily={theme.fontFamily.bold}
            fontSize={theme.fontSize.Giant}
            color={theme.colors.light.white}
          >
            {Math.floor(current.temp_c)}
          </Text>
          <Text
            fontFamily={theme.fontFamily.bold}
            fontSize={theme.fontSize.LG}
            color={theme.colors.light.white}
          >
            º
          </Text>
        </S.ContainerTemperature>

        <Text
          fontFamily={theme.fontFamily.regular}
          fontSize={theme.fontSize.MD}
          color={theme.colors.gray[100]}
        >
          {current.condition.text}
        </Text>
      </S.Container>

      <Divider top={30} />

      <WeatherDescription data={dataWeatherDescription} />

      <Divider top={30} />

      <S.TodayAnd7NextDaysContainer>
        <Text
          fontFamily={theme.fontFamily.regular}
          fontSize={theme.fontSize.MMD}
          color={theme.colors.light.white}
        >
          Hoje
        </Text>

        <S.Next7DaysContainer>
          <Text
            fontFamily={theme.fontFamily.regular}
            fontSize={theme.fontSize.XS}
            color={theme.colors.gray[100]}
          >
            Próximos 7 dias
          </Text>

          <SimpleLineIcons
            name="arrow-right"
            size={11}
            color={theme.colors.gray[100]}
            style={{ marginLeft: 4 }}
          />
        </S.Next7DaysContainer>
      </S.TodayAnd7NextDaysContainer>

      <Divider top={15} />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={forecast.forecastday[0].hour}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <S.Separator />}
        renderItem={({ item, index }) => {
          const dataCardHourTemperature = [
            {
              id: index,
              icon: item.condition.icon,
              temperatureValue: Math.floor(item.temp_c),
              hour: item.time.substring(11, 16),
            },
          ];
          return (
            <CardHourTemperature data={dataCardHourTemperature} key={index} />
          );
        }}
      />

      <Divider bottom={15} />
    </>
  );
};

const Home = ({ navigation }: Props): JSX.Element => {
  const [city, setCity] = useState(null);
  const [response, setResponse] = useState<ISearchData>(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getDate = () => {
    setCurrentDate(formatDate());
  };

  const getCityName = useCallback(async () => {
    const storedCity = await AsyncStorage.getItem(CITY_NAME);

    setCity(storedCity);

    setIsLoading(false);
  }, []);

  const getAPIData = async () => {
    setIsLoading(true);

    await FindWeatherAPI.getForecast(city)
      .then((response) => {
        const data = response.data;

        setResponse(data);
        setIsLoading(false);
      })
      .catch((error) => console.log("Error calling API: ", error));
  };

  useFocusEffect(
    useCallback(() => {
      getCityName();
    }, [])
  );

  useEffect(() => {
    if (city) {
      getAPIData();
      getDate();
    } else {
      setIsLoading(false);
      setResponse(null);
    }
  }, [city]);

  if (isLoading) {
    return (
      <S.ScrollView>
        <ActivityIndicator size="small" color={theme.colors.light.white} />
      </S.ScrollView>
    );
  }

  return (
    <SectionList
      style={{ backgroundColor: theme.colors.dark[500], paddingHorizontal: 16 }}
      sections={[
        {
          title: "",
          data: [
            response ? (
              <FullContent
                current={response.current}
                location={response.location}
                forecast={response.forecast}
                date={currentDate}
              />
            ) : (
              <EmptyStateContent navigation={navigation} />
            ),
          ],
        },
      ]}
      renderItem={({ item }) => item}
      keyExtractor={(_, index) => String(index)}
    />
  );
};

export default Home;