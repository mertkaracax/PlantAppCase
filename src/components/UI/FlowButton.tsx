import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import { Color } from "@src/style/colors";

type FlowButtonProps = {
  title: string;
  style?: any;
  onPress: () => void;
};

const FlowButton: React.FC<FlowButtonProps> = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { bottom: Platform.OS === "android" ? ch(55) : ch(89) },
      ]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FlowButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.OnboardingButtonBg,
    width: cw(327),
    bottom: ch(89),
    position: "absolute",
    borderRadius: 12,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    // lineHeight: 24,
    color: "white",
    fontSize: FontSize.SIZE15,
    fontFamily: Font.Regular,
  },
});
