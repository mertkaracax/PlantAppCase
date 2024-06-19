import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Font, FontSize, LetterSpace } from "@src/style/fonts";

const Inbox = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        AsyncStorage.setItem("onboardingCompleted", JSON.stringify(false));
      }}
    >
      <Image
        style={styles.image}
        source={require("@src/assets/icons/Mail.png")}
      />
      <View style={styles.textContainer}>
        <MaskedView
          style={{ flex: 1 }}
          maskElement={
            <View style={styles.maskContainer}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: FontSize.SIZE16,
                    fontFamily:
                      Platform.OS === "ios" ? Font.SF_PRO : Font.Regular,
                    letterSpacing: LetterSpace.TIGHT_032,
                  },
                ]}
              >
                FREE Premium Available
              </Text>
              <Text style={[styles.text, { fontSize: FontSize.SIZE13 }]}>
                Tap to upgrade your account!
              </Text>
            </View>
          }
        >
          <LinearGradient
            colors={["#E5C990", "#E4B046"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </MaskedView>
      </View>
      <Image
        style={styles.arrowRight}
        source={require("@src/assets/icons/PremiumArrowRight.png")}
      />
    </TouchableOpacity>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    width: cw(327),
    height: ch(64),
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "#24201A",
    flexDirection: "row",
    paddingLeft: cw(20),
    alignItems: "center",
    marginTop: ch(24),
    position: "relative",
  },
  image: {
    height: ch(29.73),
    width: cw(36),
    marginRight: cw(16),
  },
  textContainer: {
    minHeight: ch(38),
    width: cw(228),
  },
  maskContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    backgroundColor: "transparent",
    color: "black",
  },
  gradient: {
    flex: 1,
  },
  arrowRight: {
    position: "absolute",
    right: cw(12),
    height: cw(24),
    width: cw(24),
    resizeMode: "cover",
  },
});
