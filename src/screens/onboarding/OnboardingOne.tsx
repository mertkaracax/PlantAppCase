import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingScreenNames, OnboardingScreenProps } from "../types";
import { Font, LetterSpace } from "@src/style/fonts";
import { FontStyles } from "@src/style/general";
import Header from "@src/components/onboarding/Header";
import { ch, cw } from "@src/style/dimensions";
import { IMAGES } from "@src/assets/images";
import FlowButton from "@src/components/UI/FlowButton";
import PaginationIndicator from "@src/components/onboarding/PaginationIndicator";

const OnboardingOne: React.FC<OnboardingScreenProps> = ({
  navigation,
  route,
}) => {
  const headerTitle = (
    <Text
      style={[
        FontStyles.headerTitle,
        { fontFamily: Font.Medium, letterSpacing: LetterSpace.TIGHT },
      ]}
    >
      Take a photo to{" "}
      <Text style={{ fontFamily: Font.ExtraBold }}>identify</Text> the plant!
    </Text>
  );

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("@src/assets/images/onboarding/o1.png")}
    >
      <SafeAreaView>
        <Header title={headerTitle} height={ch(66)} />
        <Image source={IMAGES.onboarding_2.brush} style={styles.brush} />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGES.onboarding_2.background} />
        </View>
        <FlowButton
          title="Continue"
          onPress={() => {
            navigation.navigate(OnboardingScreenNames.ONBOARDING_TWO);
          }}
        />
        <PaginationIndicator
          active_screen={OnboardingScreenNames.ONBOARDING_ONE}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  brush: {
    width: cw(136),
    height: ch(13),
    position: "absolute",
    left: cw(203),
    top: ch(93),
  },
  imageContainer: {
    height: ch(530),
    marginTop: ch(12),
    width: "100%",
  },
  image: {
    resizeMode: "contain",
    alignSelf: "center",
    flex: 1,
  },
});

export default OnboardingOne;
