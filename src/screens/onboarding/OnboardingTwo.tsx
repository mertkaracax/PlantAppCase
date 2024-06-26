import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingScreenNames, RouteProps } from "../types";
import { Font, LetterSpace, LineHeight } from "@src/style/fonts";
import { FontStyles } from "@src/style/general";
import Header from "@src/components/UI/Header";
import { ch, cw } from "@src/style/dimensions";
import { IMAGES } from "@src/assets/images";
import OnboardingButton from "@src/components/onboarding/OnboardingButton";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import PaginationIndicator from "@src/components/onboarding/PaginationIndicator";
import { useBackBlocker } from "@src/hooks/navigationHooks";

const OnboardingTwo: React.FC<RouteProps> = ({ navigation }) => {
  useBackBlocker();
  const headerTitle = (
    <Text
      style={[
        FontStyles.headerTitle,
        {
          fontFamily: Font.Medium,
          letterSpacing: LetterSpace.TIGHT_1,
          lineHeight: LineHeight.LINE33_18,
        },
      ]}
    >
      Get plant <Text style={{ fontFamily: Font.ExtraBold }}>care guides</Text>
    </Text>
  );

  const continueHandler = () => {
    navigation.navigate("Paywall");
  };

  return (
    <ImageBackground
      resizeMethod="resize"
      style={{ flex: 1 }}
      source={IMAGES.onboarding_3.leaves}
      resizeMode="contain"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Header title={headerTitle} height={ch(49)} width={cw(283)}>
          <Image source={IMAGES.onboarding_3.brush} style={styles.brush} />
        </Header>

        <MaskedView
          maskElement={
            <View style={styles.maskContainer}>
              <LinearGradient
                colors={["black", "black", "transparent"]}
                locations={[0, 0.5, 1]}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradient}
              />
            </View>
          }
        >
          <Image style={styles.image} source={IMAGES.onboarding_3.background} />
        </MaskedView>
        <Image style={styles.artwork} source={IMAGES.onboarding_3.artwork} />
        <OnboardingButton
          style={{ height: ch(56) }}
          title="Continue"
          onPress={continueHandler}
        />

        <PaginationIndicator
          active_screen={OnboardingScreenNames.ONBOARDING_TWO}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  brush: {
    width: cw(152.13),
    height: ch(13),
    position: "absolute",
    right: cw(6),
    bottom: ch(0),
  },
  artwork: {
    position: "absolute",
    left: cw(195),
    top: ch(128),
    overflow: "visible",
    height: ch(185),
    width: cw(167.69),
    zIndex: 999,
  },
  image: {
    height: ch(540),
    width: cw(261),
    alignSelf: "center",
    marginTop: ch(78),
    position: "relative",
    resizeMode: "contain",
  },
  maskContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default OnboardingTwo;
