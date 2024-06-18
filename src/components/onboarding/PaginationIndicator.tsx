import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { OnboardingScreenNames } from "@src/screens/types";
import { ch, cw } from "@src/style/dimensions";
import { DotSize } from "@src/style/fonts";

type PaginationProps = {
  active_screen: OnboardingScreenNames;
};

const PaginationIndicator: React.FC<PaginationProps> = ({ active_screen }) => {
  const pages: Array<OnboardingScreenNames> = Object.values(
    OnboardingScreenNames
  );

  return (
    <View
      style={[
        styles.container,
        { bottom: Platform.OS === "android" ? ch(25) : ch(46.5), zIndex: 4 },
      ]}
    >
      {pages.map((page) => (
        <View
          key={page}
          style={[page === active_screen ? styles.activeDot : styles.dot]}
        ></View>
      ))}
    </View>
  );
};

export default PaginationIndicator;

const styles = StyleSheet.create({
  container: {
    width: cw(38),
    height: ch(10),
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
  },
  dot: {
    width: DotSize.SMALL,
    height: DotSize.SMALL,
    backgroundColor: "gray",
    borderRadius: DotSize.SMALL,
  },
  activeDot: {
    width: DotSize.BIG,
    height: DotSize.BIG,
    borderRadius: DotSize.BIG_RADIUS,
    backgroundColor: "black",
  },
});
