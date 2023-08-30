import { useReducer } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import {
  primaryColor,
  secondaryColor,
  grey1Color,
  grey2Color,
} from "../styleguide";
import { convertToCamelCase } from "../utilities/convertToCamelCase";
import { Icon } from "./Icon";

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

export const PrimaryButton = ({
  showIcon = true,
  text = "Get Started",
  stateProp,
  type,
  override = <Icon name="arrow-right" />,
  style = {},
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    type: type || "primary",
  });

  const buttonClass = convertToCamelCase(state.state, state.type);
  const labelClass = convertToCamelCase(state.state, state.type, "label");

  return (
    <Pressable
      onHoverIn={() => dispatch("mouse_enter")}
      onHoverOut={() => dispatch("mouse_leave")}
      style={[styles.primaryButton, styles[buttonClass], style]}
    >
      <Text numberOfLines={1} style={[styles.label, styles[labelClass]]}>
        {text}
      </Text>
      {showIcon ? override : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    alignItems: "center",
    borderRadius: 8,
    display: "flex",
    gap: 8,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    position: "relative",
    transitionProperty: "all",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease",
    height: 40,
  },
  label: {
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    position: "relative",
    width: "auto",
  },
  secondary: {
    backgroundColor: "#ffffff",
    border: "1px solid",
  },
  defaultSecondary: {
    borderColor: primaryColor,
  },
  hoverPrimary: {
    backgroundColor: secondaryColor,
  },
  disabledPrimary: {
    backgroundColor: grey1Color,
  },
  hoverSecondary: {
    borderColor: secondaryColor,
  },
  defaultPrimary: {
    backgroundColor: primaryColor,
  },
  disabledSecondary: {
    borderColor: grey1Color,
  },
  defaultSecondaryLabel: {
    color: primaryColor,
  },
  hoverPrimaryLabel: {
    color: "#ffffff",
  },
  disabledPrimaryLabel: {
    color: grey2Color,
  },
  hoverSecondaryLabel: {
    color: secondaryColor,
  },
  defaultPrimaryLabel: {
    color: "#ffffff",
  },
  disabledSecondaryLabel: {
    color: grey1Color,
  },
});
