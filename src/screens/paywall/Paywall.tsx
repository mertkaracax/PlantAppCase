import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingScreenProps } from "../types";
import { IMAGES } from "@src/assets/images";
import { ch, cw } from "@src/style/dimensions";
import { StatusBar } from "expo-status-bar";
import Header from "@src/components/onboarding/Header";
import { FontStyles } from "@src/style/general";
import { Font } from "@src/style/fonts";

const Paywall: React.FC<OnboardingScreenProps> = ({ navigation, route }) => {
  const headerTitle = (
    <Text style={FontStyles.paywallHeaderTitle}>
      <Text style={{ fontFamily: Font.ExtraBold, color: "white" }}>
        PlantApp
      </Text>{" "}
      Premium
    </Text>
  );
  return (
    <View style={{ backgroundColor: "#101e17", height: "100%", width: "100%" }}>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.backgroundImg}
        source={IMAGES.paywall.background}
      >
        <Header left={cw(24)} top={ch(264)} title={headerTitle} />
      </ImageBackground>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("BottomTab");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    height: ch(490),
    width: cw(375),
  },
});

export default Paywall;
