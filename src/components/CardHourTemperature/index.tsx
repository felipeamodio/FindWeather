import React from "react";
import theme from "../../theme";
import Divider from "../Divider";
import Text from "../Text";

import * as S from "./styles";
interface ICardHourTemperature {
  id: number;
  temperatureValue: number;
  icon: string;
  hour: string;
}
interface ICardHourTemperatureData {
  data: ICardHourTemperature[];
}

const CardHourTemperature = ({
  data,
}: ICardHourTemperatureData): JSX.Element => {
  return (
    <>
      {data.map((item) => (
        <S.ContainerCard key={item.id}>
          <S.ContainerTemperature>
            <Text
              fontFamily={theme.fontFamily.bold}
              fontSize={theme.fontSize.MD}
              color={theme.colors.light.white}
            >
              {item.temperatureValue}
            </Text>
            <Text
              fontFamily={theme.fontFamily.regular}
              fontSize={theme.fontSize.XXXS}
              color={theme.colors.gray[100]}
              style={{ paddingBottom: 9 }}
            >
              º
            </Text>
          </S.ContainerTemperature>

          <Divider top={5} />

          <S.Image source={{ uri: `https:${item.icon}` }} />

          <Divider top={5} />

          <Text
            fontFamily={theme.fontFamily.bold}
            fontSize={theme.fontSize.XXS}
            color={theme.colors.gray[100]}
          >
            {item.hour}
          </Text>
        </S.ContainerCard>
      ))}
    </>
  );
};

export default CardHourTemperature;