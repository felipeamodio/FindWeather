import React from "react";

import * as S from "./styles";

export interface IDivider {
  top?: number;
  bottom?: number;
}

const Divider = ({ top, bottom }: IDivider) => {
  return <S.Container top={top} bottom={bottom} />;
};

export default Divider;
