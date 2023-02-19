import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

export interface IButton extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor: string;
  borderColor?: string;
  borderRadius: number;
  height: number;
}

const Button = ({
  backgroundColor,
  borderColor = "transparent",
  children,
  borderRadius,
  height,
  ...rest
}: IButton) => {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      height={height}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
