import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import { Color } from "@src/style/colors";

type FlowButtonProps = {
  title: string;
  onPress: () => void;
  style?: any;
};

const FlowButton: React.FC<FlowButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FlowButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.OnboardingButtonBg,
    width: cw(327),
    // height: ch(56),
    position: "absolute",
    top: ch(667),
    borderRadius: 12,
    alignSelf: "center",
    padding: 18,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: FontSize.SIZE15,
    fontFamily: Font.Regular,
  },
});
