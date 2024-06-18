import { ch, cw } from "@src/style/dimensions";
import React, { useRef, useEffect, ReactNode } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
  ScrollView,
} from "react-native";
import { corouselWidth } from "./util";

interface FeaturesProps {
  children: ReactNode;
  duration?: number;
}

const Features: React.FC<FeaturesProps> = ({ children, duration = 10000 }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const scrollAnimation = Animated.loop(
      Animated.timing(scrollX, {
        toValue: -corouselWidth,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
        delay: 1000,
      })
    );

    scrollAnimation.start();

    return () => scrollAnimation.stop();
  }, [scrollX, duration, children]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            width: -corouselWidth,
            transform: [{ translateX: scrollX }],
          },
        ]}
      >
        {children}
        {children}
        {/* Children are duplicated to create infinite loop effect */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: cw(375),
    position: "absolute",
    top: ch(355),
    paddingLeft: cw(24),
  },
  animatedContainer: {
    flexDirection: "row",
  },
});

export default Features;
