import React from "react";
import { TouchableOpacityProps } from "react-native";
import Text from "../Text";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme";

import * as S from "./styles";

interface IHeaderNavigation extends TouchableOpacityProps {
  titlePage: string;
}

const HeaderNavigation = ({
  titlePage,
  ...rest
}: IHeaderNavigation): JSX.Element => {
  return (
    <S.Container>
      <S.BackButton {...rest}>
        <AntDesign name="left" size={20} color={theme.colors.light.white} />
      </S.BackButton>

      <Text
        fontFamily={theme.fontFamily.regular}
        fontSize={theme.fontSize.SM}
        color={theme.colors.light.white}
        style={{ marginLeft: "30%" }}
      >
        {titlePage}
      </Text>
    </S.Container>
  );
};

export default HeaderNavigation;