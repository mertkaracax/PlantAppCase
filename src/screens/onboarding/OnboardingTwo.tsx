import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "../types";
import { Font } from "@src/style/fonts";
import { FontStyles } from "@src/style/general";
import Header from "@src/components/onboarding/Header";
import { ch } from "@src/style/dimensions";
import { IMAGES } from "@src/assets/images";
import FlowButton from "@src/components/UI/FlowButton";
import Footer from "@src/components/UI/Footer";

const OnboardingTwo: React.FC<StackScreenProps> = ({ navigation, route }) => {
  const headerTitle = (
    <Text style={[FontStyles.headerTitle, { fontWeight: "500" }]}>
      Take a photo to{" "}
      <Text style={{ fontFamily: Font.SemiBold }}>identify</Text> the plant!
    </Text>
  );

  const continueHandler = () => {
    navigation.navigate("Onboarding_3");
  };

  return (
    <SafeAreaView>
      <Header title={headerTitle} height={ch(66)} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={IMAGES.onboarding_2.background} />
      </View>
      <FlowButton title="Continue" onPress={continueHandler} />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default OnboardingTwo;
