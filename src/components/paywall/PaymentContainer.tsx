import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { ch, cw } from "@src/style/dimensions";

const PaymentContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default PaymentContainer;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    marginTop: ch(19),
  },
});
