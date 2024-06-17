import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NavigatorNames,
  OnboardingScreenNames,
  OnboardingScreenProps,
} from "../types";
import { Font, LetterSpace } from "@src/style/fonts";
import { FontStyles } from "@src/style/general";
import Header from "@src/components/onboarding/Header";
import { ch, cw } from "@src/style/dimensions";
import { IMAGES } from "@src/assets/images";
import FlowButton from "@src/components/UI/FlowButton";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import PaginationIndicator from "@src/components/onboarding/PaginationIndicator";

const OnboardingTwo: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const headerTitle = (
    <Text
      style={[
        FontStyles.headerTitle,
        { fontFamily: Font.Medium, letterSpacing: LetterSpace.TIGHT },
      ]}
    >
      Get plant <Text style={{ fontFamily: Font.ExtraBold }}>care guides</Text>
    </Text>
  );

  const continueHandler = () => {
    navigation.navigate("Paywall");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={IMAGES.onboarding_3.leaves}
        resizeMode="contain"
      >
        <Header title={headerTitle} height={ch(49)} />
        <Image source={IMAGES.onboarding_3.brush} style={styles.brush} />
        <MaskedView
          maskElement={
            <View style={styles.maskContainer}>
              <LinearGradient
                colors={["black", "black", "transparent"]}
                locations={[0, 0.5, 1]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradient}
              />
            </View>
          }
        >
          <Image style={styles.image} source={IMAGES.onboarding_3.background} />
        </MaskedView>
        <Image style={styles.artwork} source={IMAGES.onboarding_3.artwork} />
        <FlowButton
          style={styles.button}
          title="Continue"
          onPress={continueHandler}
        />
      </ImageBackground>
      <PaginationIndicator
        active_screen={OnboardingScreenNames.ONBOARDING_TWO}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  brush: {
    width: cw(154.12),
    height: ch(29.93),
    position: "absolute",
    left: cw(143),
    top: ch(48),
  },
  imageContainer: {
    height: ch(540),
    width: ch(261),
    alignSelf: "center",
    marginTop: ch(79),
  },
  artwork: {
    position: "absolute",
    left: cw(195),
    top: ch(81),
    overflow: "visible",
    height: ch(185),
    width: cw(167.69),
    zIndex: 999,
  },
  image: {
    height: ch(540),
    width: cw(261),
    alignSelf: "center",
    marginTop: ch(79),
    position: "relative",
    resizeMode: "contain",
  },
  button: {
    position: "absolute",
    top: ch(620),
    alignSelf: "center",
  },
  maskContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default OnboardingTwo;
