import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { cw } from "@src/style/dimensions";
import { Color } from "@src/style/colors";

type OfferCheckboxParams = {
  isActive: boolean;
};

const OfferCheckbox: React.FC<OfferCheckboxParams> = ({ isActive }) => {
  return (
    <View
      style={[
        styles.outer,
        { backgroundColor: isActive ? "#28AF6E" : "#FFFFFF26" },
      ]}
    >
      {isActive && <View style={styles.inner}></View>}
    </View>
  );
};

export default OfferCheckbox;

const styles = StyleSheet.create({
  outer: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: "#28AF6E", //#FFFFFF26
    marginRight: cw(12),
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: 9,
    height: 9,
    borderRadius: 24,
    backgroundColor: Color.WHITE,
  },
});
