import React from "react";
import theme from "../../theme";
import Text from "../Text";

import * as S from "./styles";

interface ITemperature {
  minTemp: number;
  maxTemp: number;
  minTempFontSize: number;
  maxTempFontSize: number;
}

const Temperature = ({
  minTemp,
  maxTemp,
  minTempFontSize,
  maxTempFontSize,
}: ITemperature): JSX.Element => {
  return (
    <S.TemperatureContainer>
      <S.MaxTemperatureContainer>
        <Text
          fontFamily={theme.fontFamily.bold}
          fontSize={maxTempFontSize}
          color={theme.colors.light.white}
        >
          {maxTemp}
        </Text>
        <Text
          fontFamily={theme.fontFamily.bold}
          fontSize={theme.fontSize.LG}
          color={theme.colors.light.white}
          style={{ paddingBottom: 35 }}
        >
          º
        </Text>
      </S.MaxTemperatureContainer>

      <S.MinTemperatureContainer>
        <Text
          fontFamily={theme.fontFamily.semibold}
          fontSize={minTempFontSize}
          color={theme.colors.gray[100]}
        >
          {""} / {""} {minTemp}
        </Text>
        <Text
          fontFamily={theme.fontFamily.semibold}
          fontSize={theme.fontSize.MD}
          color={theme.colors.gray[100]}
          style={{ paddingBottom: 24 }}
        >
          º
        </Text>
      </S.MinTemperatureContainer>
    </S.TemperatureContainer>
  );
};

export default Temperature;
