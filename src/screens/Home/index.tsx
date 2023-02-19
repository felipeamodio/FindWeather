import React from "react";
import { Image } from "react-native";

import Divider from "../../components/Divider";
import RainingPNG from "../../assets/raining.png";
import Temperature from "../../components/Temperature";
import WeatherDescription from "../../components/WeatherDescription";
import CardHourTemperature from "../../components/CardHourTemperature";

import theme from "../../theme";
import * as S from "./styles";

import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import DropMiniaturePNG from "../../assets/drop-miniature.png";
import WindMiniaturePNG from "../../assets/wind-miniature.png";
import RainingCloudPNG from "../../assets/raining-cloud-miniature.png";

const dataWeatherDescription = [
  {
    id: 1,
    icon: DropMiniaturePNG,
    value: "24%",
    text: "Umidade",
  },

  {
    id: 2,
    icon: WindMiniaturePNG,
    value: "30km/h",
    text: "Veloc. Vento",
  },

  {
    id: 3,
    icon: RainingCloudPNG,
    value: "76%",
    text: "Chuva",
  },
];

const dataCardHourTemperature = [
  {
    id: 1,
    icon: DropMiniaturePNG,
    temperatureValue: 23,
    hour: "09:00",
  },

  {
    id: 2,
    icon: WindMiniaturePNG,
    temperatureValue: 18,
    hour: "13:00",
  },

  {
    id: 3,
    icon: RainingCloudPNG,
    temperatureValue: 8,
    hour: "17:00",
  },

  {
    id: 4,
    icon: RainingCloudPNG,
    temperatureValue: 8,
    hour: "23:00",
  },
];

const Home = (): JSX.Element => {
  return (
    <S.Scroll>
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
              <S.Label
                fontFamily={theme.fontFamily.regular}
                fontSize={theme.fontSize.SM}
                color={theme.colors.light.white}
              >
                {""} Guarulhos, SP {""}
              </S.Label>

              <S.Label
                fontFamily={theme.fontFamily.regular}
                fontSize={theme.fontSize.SM}
                color={theme.colors.light.white}
              >
                - Brasil
              </S.Label>
            </S.LocationCityCountryContainer>

            <Divider top={3} />

            <S.Label
              fontFamily={theme.fontFamily.regular}
              fontSize={theme.fontSize.XS}
              color={theme.colors.gray[100]}
            >
              {""} Sábado, 18 Fev de 2023
            </S.Label>
          </S.LocationTextContainer>
        </S.LocationIconContainer>

        <Divider top={19} />

        <S.ImageContainer>
          <Image source={RainingPNG} />
        </S.ImageContainer>

        <Temperature
          maxTemp={23}
          minTemp={18}
          maxTempFontSize={theme.fontSize.Giant}
          minTempFontSize={theme.fontSize.XL}
        />

        <S.Label
          fontFamily={theme.fontFamily.regular}
          fontSize={theme.fontSize.MD}
          color={theme.colors.gray[100]}
        >
          Chuva Moderada
        </S.Label>
      </S.Container>

      <Divider top={30} />

      <WeatherDescription data={dataWeatherDescription} />

      <Divider top={30} />

      <S.TodayAnd7NextDaysContainer>
        <S.Label
          fontFamily={theme.fontFamily.regular}
          fontSize={theme.fontSize.MMD}
          color={theme.colors.gray[100]}
        >
          Hoje
        </S.Label>

        <S.Next7DaysContainer>
          <S.Label
            fontFamily={theme.fontFamily.regular}
            fontSize={theme.fontSize.XS}
            color={theme.colors.gray[100]}
          >
            Próximos 7 dias
          </S.Label>

          <SimpleLineIcons
            name="arrow-right"
            size={11}
            color={theme.colors.gray[100]}
            style={{ marginLeft: 4 }}
          />
        </S.Next7DaysContainer>
      </S.TodayAnd7NextDaysContainer>

      <Divider top={15} />

      <CardHourTemperature data={dataCardHourTemperature} />
    </S.Scroll>
  );
};

export default Home;
