import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingScreenNames, OnboardingScreenProps } from "../types";
import { ch, cw } from "@src/style/dimensions";
import Header from "@src/components/onboarding/Header";
import { Font } from "@src/style/fonts";
import { IMAGES } from "@src/assets/images";
import Footer from "@src/components/UI/Footer";
import FlowButton from "@src/components/UI/FlowButton";
import { FontStyles } from "@src/style/general";

const Intro: React.FC<OnboardingScreenProps> = ({ route, navigation }) => {
  const headerTitle = (
    <Text style={FontStyles.headerTitle}>
      Welcome to <Text style={{ fontFamily: Font.SemiBold }}>Plant App</Text>
    </Text>
  );

  return (
    <SafeAreaView style={styles.root}>
      <Header
        title={headerTitle}
        subtitle="Identify more than 3000+ plants and 88% accuracy."
        height={ch(85)}
      />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={IMAGES.onboarding_1.background} />
      </View>
      <FlowButton
        title="Get Started"
        onPress={() => {
          navigation.navigate("Onboarding");
        }}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageContainer: {
    height: ch(499),
    marginTop: ch(24),
    width: "100%",
  },
  image: {
    resizeMode: "contain",
    alignSelf: "center",
    flex: 1,
  },
});

export default Intro;
