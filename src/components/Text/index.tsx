import React from "react";
import { TextProps } from "react-native";
import * as S from "./styles";

export interface IText extends TextProps {
  children: React.ReactNode;
  fontSize: number;
  fontFamily: string;
  color: string;
  textAlign?: "center" | "right" | "left";
}

const Text = ({
  children,
  fontSize,
  fontFamily,
  color,
  textAlign = "center",
  ...rest
}: IText): JSX.Element => {
  return (
    <S.Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </S.Text>
  );
};

export default Text;
