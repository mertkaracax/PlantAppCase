import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProps } from "../types";
import { ch, cw } from "@src/style/dimensions";
import Header from "@src/components/UI/Header";
import { Font } from "@src/style/fonts";
import { IMAGES } from "@src/assets/images";
import Footer from "@src/components/UI/Footer";
import OnboardingButton from "@src/components/onboarding/OnboardingButton";
import { FontStyles } from "@src/style/general";

const Intro: React.FC<RouteProps> = ({ route, navigation }) => {
  const headerTitle = (
    <Text style={[FontStyles.headerTitle, { maxWidth: cw(375) }]}>
      Welcome to <Text style={{ fontFamily: Font.SemiBold }}>PlantApp</Text>
    </Text>
  );

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("@src/assets/images/onboarding/Onboarding_1_white_bg.png")}
    >
      <SafeAreaView style={styles.root}>
        <Header
          title={headerTitle}
          subtitle={`Identify more than 3000+ plants and\n 88% accuracy.`}
          height={ch(85)}
          marginBottom={ch(24)}
        />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGES.onboarding_1.background} />
        </View>
        <OnboardingButton
          style={{ height: ch(56) }}
          title="Get Started"
          onPress={() => {
            navigation.navigate("Onboarding");
          }}
        />
        <Footer />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageContainer: {
    height: ch(499),
    width: "100%",
  },
  image: {
    resizeMode: "contain",
    alignSelf: "center",
    flex: 1,
  },
});

export default Intro;
