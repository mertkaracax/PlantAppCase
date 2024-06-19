import React, { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize, LetterSpace } from "@src/style/fonts";
import { Color } from "@src/style/colors";

type FlowButtonProps = {
  title: string;
  style?: any;
  onPress: () => void;
};

const FlowButton: React.FC<FlowButtonProps> = ({ title, style, onPress }) => {
  const buttonScaleX = new Animated.Value(1);
  const buttonScaleY = new Animated.Value(1);
  const buttonOpacity = new Animated.Value(1);

  useEffect(() => {
    animateButton();
  }, []);

  const animateButton = () => {
    buttonScaleX.setValue(1);
    buttonScaleY.setValue(1);
    buttonOpacity.setValue(1);

    Animated.loop(
      Animated.parallel([
        Animated.timing(buttonScaleX, {
          toValue: 1.06,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(buttonScaleY, {
          toValue: 1.35,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(buttonOpacity, {
          toValue: 0,
          duration: 700,
          delay: 200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          style,
          { bottom: Platform.OS === "android" ? ch(55) : ch(89) },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.title,
            { fontFamily: Platform.OS === "ios" ? Font.SF_PRO : Font.Regular },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.backgroundButton,
          {
            transform: [{ scaleX: buttonScaleX }, { scaleY: buttonScaleY }],
            opacity: buttonOpacity,
            bottom: Platform.OS === "android" ? ch(55) : ch(89),
          },
        ]}
      />
    </>
  );
};

export default FlowButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.OnboardingButtonBg,
    width: cw(327),
    height: ch(56),
    position: "absolute",
    borderRadius: 12,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  title: {
    color: "white",
    fontSize: FontSize.SIZE15,
    fontWeight: "700",
    letterSpacing: LetterSpace.TIGHT_024,
  },
  backgroundButton: {
    position: "absolute",
    backgroundColor: "transparent",
    width: cw(327),
    bottom: ch(90),
    height: ch(56),
    borderRadius: 12,
    alignSelf: "center",
    borderColor: Color.OnboardingButtonShadow,
    borderWidth: 2.1,
  },
});
