import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { HeaderProps } from "../onboarding/types";
import { ch, cw } from "@src/style/dimensions";
import { FontStyles } from "@src/style/general";

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  width = cw(315),
  height = "auto",
  top,
  left,
  marginTop = ch(12),
  marginBottom,
  maxWidth,
  children,
}) => {
  return (
    <View
      style={[
        styles.headerContainer,
        {
          width: width,
          maxWidth: maxWidth,
          height: height,
          top: top,
          left: left,
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}
    >
      {title}
      {typeof subtitle === "string" ? (
        <Text style={[FontStyles.headerSubtitle]}>{subtitle}</Text>
      ) : (
        React.isValidElement(subtitle) && subtitle
      )}
      {children}
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: cw(24),
    marginTop: ch(12),
  },
});
