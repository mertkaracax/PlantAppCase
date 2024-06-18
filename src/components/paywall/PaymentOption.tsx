import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ch, cw } from "@src/style/dimensions";
import OfferCheckbox from "./OfferCheckbox";
import { Font, FontSize } from "@src/style/fonts";
import { Color } from "@src/style/colors";
import { LinearGradient } from "expo-linear-gradient";
// colors={
//             isActive
//               ? ['rgba(40, 175, 110, 0.17)', 'rgba(40, 175, 110, 0)']
//               : ['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.05)']
//           }

const PaymentOption = () => {
  const [selected, setSelected] = useState(false);
  return (
    <View style={styles.button}>
      <Pressable style={styles.container}>
        <LinearGradient
          colors={["rgba(40, 175, 110, 0.17)", "rgba(40, 175, 110, 0)"]}
          start={[1, 0]}
          end={[0, 1]}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              height: ch(34),
              alignItems: "center",
              position: "relative",
            }}
          >
            <View
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: ch(26),
                width: cw(77),
                backgroundColor: "#28AF6E",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 14,
                borderBottomLeftRadius: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: Font.Medium,
                  fontSize: FontSize.SIZE12,
                }}
              >
                Save 50%
              </Text>
            </View>
            <OfferCheckbox />
            <View>
              <Text
                style={{
                  fontSize: FontSize.SIZE16,
                  color: Color.WHITE,
                  fontFamily: Font.Medium,
                }}
              >
                1 Month
              </Text>
              <Text
                style={{
                  color: "#FFFFFFB2",
                  fontFamily: Font.Regular,
                  fontSize: FontSize.SIZE12,
                }}
              >
                $2.99/month, auto renewable
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default PaymentOption;

const styles = StyleSheet.create({
  button: {
    height: ch(60),
    width: cw(327),
    borderRadius: 14,
    borderColor: "#FFFFFF4D",
    backgroundColor: "#1c2923",
    borderWidth: 0.5,
    alignSelf: "center",
    marginBottom: ch(16),
  },
  container: {
    flex: 1,
    borderRadius: 14,
    paddingLeft: cw(16),
    justifyContent: "center",
  },
});
