import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ImageBackgroundBase,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingScreenNames, OnboardingScreenProps } from "../types";
import { Font, LetterSpace, LineHeight } from "@src/style/fonts";
import { FontStyles } from "@src/style/general";
import Header from "@src/components/onboarding/Header";
import { SCREEN, ch, cw } from "@src/style/dimensions";
import { IMAGES } from "@src/assets/images";
import FlowButton from "@src/components/UI/FlowButton";
import PaginationIndicator from "@src/components/onboarding/PaginationIndicator";

const OnboardingOne: React.FC<OnboardingScreenProps> = ({
  navigation,
  route,
}) => {
  const headerTitle = (
    <Text
      numberOfLines={2}
      style={[
        FontStyles.headerTitle,
        {
          fontFamily: Font.Medium,
          letterSpacing: LetterSpace.TIGHT,
          lineHeight: 33.18,
        },
      ]}
    >
      Take a photo to{" "}
      <Text style={{ fontFamily: Font.ExtraBold }}>identify </Text> the plant!
    </Text>
  );

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("@src/assets/images/onboarding/o1.png")}
    >
      <SafeAreaView>
        <Header title={headerTitle} height={ch(75)} />
        <Image source={IMAGES.onboarding_2.brush} style={styles.brush} />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGES.onboarding_2.background} />
        </View>
      </SafeAreaView>
      <FlowButton
        style={{ height: ch(56) }}
        title="Continue"
        onPress={() => {
          navigation.navigate(OnboardingScreenNames.ONBOARDING_TWO);
        }}
      />
      <PaginationIndicator
        active_screen={OnboardingScreenNames.ONBOARDING_ONE}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  brush: {
    width: cw(138),
    height: ch(12),
    position: "absolute",
    right: cw(37),
    top: ch(93),
  },
  imageContainer: {
    height: ch(530),
    marginTop: ch(12),
    width: "100%",
  },
  image: {
    position: "absolute",
    width: SCREEN.height * 0.46,
    height: SCREEN.height * 0.81,
    top: ch(10),
    alignSelf: "center",
  },
});

export default OnboardingOne;
