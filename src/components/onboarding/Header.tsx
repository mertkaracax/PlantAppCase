import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderProps } from "./types";
import { ch, cw } from "@src/style/dimensions";
import { FontSize } from "@src/style/fonts";
import { Color } from "@src/style/colors";
import { FontStyles } from "@src/style/general";

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  width = "auto",
  height = "auto",
  top,
  left,
}) => {
  return (
    <View
      style={[
        styles.headerContainer,
        { width: width, height: height, top: top, left: left },
      ]}
    >
      {title}
      {subtitle && <Text style={[FontStyles.headerSubtitle]}>{subtitle}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: cw(24),
    marginTop: ch(12),
  },
});
