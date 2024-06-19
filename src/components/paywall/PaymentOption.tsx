import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import OfferCheckbox from "./OfferCheckbox";
import { Font, FontSize } from "@src/style/fonts";
import { Color } from "@src/style/colors";
import { LinearGradient } from "expo-linear-gradient";

type PaymentOptionpProps = {
  name: string;
  title: string;
  description: string;
  isActive: boolean;
  onPress: (plan: string) => void;
};

const PaymentOption: React.FC<PaymentOptionpProps> = ({
  name,
  title,
  description,
  isActive,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.button,
        { borderColor: isActive ? "#28AF6E" : "#FFFFFF4D" },
      ]}
    >
      <Pressable style={styles.container} onPress={onPress.bind(this, name)}>
        <LinearGradient
          colors={
            isActive
              ? ["rgba(40, 175, 110, 0.17)", "rgba(40, 175, 110, 0)"]
              : ["transparent", "transparent"]
          }
          start={[1, 0]}
          end={[0, 1]}
          style={{ flex: 1, borderRadius: 14 }}
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
            {name === "yearly" && (
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
                    color: Color.WHITE,
                  }}
                >
                  Save 50%
                </Text>
              </View>
            )}
            <OfferCheckbox isActive={isActive} />
            <View>
              <Text
                style={{
                  fontSize: FontSize.SIZE16,
                  color: Color.WHITE,
                  fontFamily: Font.Medium,
                }}
              >
                {title}
              </Text>
              <Text
                style={{
                  color: "#FFFFFFB2",
                  fontFamily: Font.Regular,
                  fontSize: FontSize.SIZE12,
                }}
              >
                {description}
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
