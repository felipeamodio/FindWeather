import React from "react";
import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import Divider from "../Divider";
import Text from "../Text";

import * as S from "./styles";

export interface ICardResult {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
  };
  condition: {
    text: string;
    icon: string;
  };
}

interface ICardResultData extends TouchableOpacityProps {
  data: ICardResult;
}

const CardResult = ({ data, ...rest }: ICardResultData): JSX.Element => {
  const { location, current, condition } = data;

  return (
    <S.ContainerButton {...rest}>
      <S.ContainerTemperatureImage>
        <S.ContainerTemperature>
          <Text
            fontFamily={theme.fontFamily.bold}
            fontSize={theme.fontSize.LG}
            color={theme.colors.light.white}
            textAlign="left"
          >
            {current && Math.floor(current.temp_c)}
          </Text>
          <Text
            fontFamily={theme.fontFamily.bold}
            fontSize={theme.fontSize.SM}
            color={theme.colors.light.white}
            textAlign="left"
          >
            º
          </Text>
        </S.ContainerTemperature>

        <S.Image
          source={{
            uri: `https:${condition.icon}`,
          }}
        />
      </S.ContainerTemperatureImage>

      <Text
        fontFamily={theme.fontFamily.regular}
        fontSize={theme.fontSize.SM}
        color={theme.colors.gray[100]}
        textAlign="left"
      >
        {condition.text}
      </Text>

      <Divider top={18} />

      <Text
        fontFamily={theme.fontFamily.regular}
        fontSize={theme.fontSize.SM}
        color={theme.colors.light.white}
        textAlign="left"
      >
        {location.name}, {location.region && location.region + ","}{" "}
        {location.country}
      </Text>
    </S.ContainerButton>
  );
};

export default CardResult;