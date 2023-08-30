import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  style: any;
}

export const Icon2 = ({ style }: Props): JSX.Element => {
  return (
    <Svg
      style={style}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <Path
        d="M3.125 10H16.875M16.875 10L11.25 4.375M16.875 10L11.25 15.625"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </Svg>
  );
};
