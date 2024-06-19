import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingScreenNames, RouteProps } from "../types";
import { Font, LetterSpace, LineHeight } from "@src/style/fonts";
import { FontStyles } from "@src/style/general";
import Header from "@src/components/UI/Header";
import { SCREEN, ch, cw } from "@src/style/dimensions";
import { IMAGES } from "@src/assets/images";
import OnboardingButton from "@src/components/onboarding/OnboardingButton";
import PaginationIndicator from "@src/components/onboarding/PaginationIndicator";
import { useBackBlocker } from "@src/hooks/navigationHooks";

const OnboardingOne: React.FC<RouteProps> = ({ navigation, route }) => {
  useBackBlocker();
  const headerTitle = (
    <Text
      numberOfLines={2}
      style={[
        FontStyles.headerTitle,
        {
          fontFamily: Font.Medium,
          letterSpacing: LetterSpace.TIGHT_1,
          lineHeight: LineHeight.LINE33_18,
        },
      ]}
    >
      Take a photo to{" "}
      <Text style={{ fontFamily: Font.ExtraBold }}>identify {`\n`}</Text> the
      plant!
    </Text>
  );

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("@src/assets/images/onboarding/Onboarding_1_white_bg.png")}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Header title={headerTitle} height={ch(75)}>
          <Image source={IMAGES.onboarding_2.brush} style={styles.brush} />
        </Header>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGES.onboarding_2.background} />
        </View>
        <OnboardingButton
          style={{ height: ch(56) }}
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
    width: cw(138),
    height: ch(12),
    position: "absolute",
    right: cw(0),
    bottom: ch(25.29),
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
