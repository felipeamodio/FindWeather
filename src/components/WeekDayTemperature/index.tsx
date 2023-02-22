import React from "react";
import theme from "../../theme";
import Temperature from "../Temperature";
import Text from "../Text";

import * as S from "./styles";

interface IWeekDayTemperature {
  date: string;
  icon: string;
  condition: string;
  minTemp: number;
  maxTemp: number;
}

const WeekDayTemperature = ({
  date,
  icon,
  condition,
  minTemp,
  maxTemp,
}: IWeekDayTemperature): JSX.Element => {
  return (
    <S.Container>
      <S.ContainerDate>
        <Text
          fontFamily={theme.fontFamily.regular}
          color={theme.colors.light.white}
          fontSize={theme.fontSize.SM}
        >
          {date}
        </Text>
      </S.ContainerDate>

      <S.ContainerIconCondition>
        <S.Image
          source={{
            uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
          }}
        />

        <Text
          fontFamily={theme.fontFamily.regular}
          color={theme.colors.gray[100]}
          fontSize={theme.fontSize.SM}
          style={{ width: 100 }}
        >
          {condition}
        </Text>
      </S.ContainerIconCondition>

      <S.ContainerTemperature>
        <Temperature
          maxTemp={maxTemp}
          maxTempFontSize={18}
          minTemp={minTemp}
          minTempFontSize={18}
          roundSize={10}
        />
      </S.ContainerTemperature>
    </S.Container>
  );
};

export default WeekDayTemperature;