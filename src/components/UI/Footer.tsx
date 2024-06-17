import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import { FontStyles } from "@src/style/general";
import { Color } from "@src/style/colors";

const Footer = () => {
  return (
    <Text style={[styles.footer]}>
      By tapping next, you are agreeing to PlantID{" "}
      <Text style={{ textDecorationLine: "underline" }}>Terms of Use</Text> &{" "}
      <Text style={{ textDecorationLine: "underline" }}>Privacy Policy</Text>.
    </Text>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    top: ch(740),
    color: Color.FooterText,
    fontSize: FontSize.SIZE11,
    fontFamily: Font.Regular,
    width: cw(232),
    alignSelf: "center",
    textAlign: "center",
  },
});
