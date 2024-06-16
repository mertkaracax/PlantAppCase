import { StyleSheet, Text, View } from "react-native";
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
}) => {
  return (
    <View style={[styles.headerContainer, { width: width, height: height }]}>
      {title}
      {subtitle && (
        <Text style={[styles.subtitle, FontStyles.rubik]}>{subtitle}</Text>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: cw(24),
    marginTop: ch(12),
    padding: 8,
    lineHeight: 33.3,
  },
  title: {
    fontWeight: "300",
    fontSize: FontSize.SIZE28,
    color: Color.HeaderText,
  },
  subtitle: {
    color: Color.SubheaderText,
    fontWeight: "300",
    fontSize: FontSize.SIZE16,
  },
});
