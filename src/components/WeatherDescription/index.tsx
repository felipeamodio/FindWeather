import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import theme from "../../theme";

import * as S from "./styles";

interface IWeatherDescriptionData {
  id: number;
  icon: ImageSourcePropType;
  value: string;
  text: string;
}

interface IWeatherData {
  data: IWeatherDescriptionData[];
}

import Divider from "../Divider";
import Text from "../Text";

const WeatherDescription = ({ data }: IWeatherData) => {
  return (
    <S.Container>
      {data.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <S.ContainerItem>
              <Image source={item.icon} />
              <Divider top={6} />
              <Text
                fontFamily={theme.fontFamily.bold}
                fontSize={theme.fontSize.XS}
                color={theme.colors.light.white}
              >
                {item.value}
              </Text>
              <Text
                fontFamily={theme.fontFamily.light}
                fontSize={theme.fontSize.XXS}
                color={theme.colors.gray[400]}
              >
                {item.text}
              </Text>
            </S.ContainerItem>

            {index !== data.length - 1 && <S.Divider />}
          </React.Fragment>
        );
      })}
    </S.Container>
  );
};

export default WeatherDescription;
