import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "../types";
import { ch, cw } from "@src/style/dimensions";
import Header from "@src/components/onboarding/Header";
import { Font, FontSize } from "@src/style/fonts";
import { IMAGES } from "@src/assets/images";
import Footer from "@src/components/UI/Footer";
import FlowButton from "@src/components/UI/FlowButton";

const OnboardingOne: React.FC<StackScreenProps> = ({ navigation, route }) => {
  const headerTitle = (
    <Text style={styles.title}>
      Welcome to <Text style={{ fontFamily: Font.SemiBold }}>Plant App</Text>
    </Text>
  );

  const getStartedHandler = () => {
    navigation.navigate("Onboarding_2");
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header
        title={headerTitle}
        subtitle="Identify more than 3000+ plants and 88% accuracy."
      />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={IMAGES.onboarding_1.background} />
      </View>
      <FlowButton title="Get Started" onPress={getStartedHandler} />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontFamily: Font.Regular,
    fontSize: FontSize.SIZE28,
    marginBottom: ch(10),
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

export default OnboardingOne;
