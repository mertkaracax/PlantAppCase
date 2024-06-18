import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingScreenProps } from "../types";
import { IMAGES } from "@src/assets/images";
import { ch, cw } from "@src/style/dimensions";
import { StatusBar } from "expo-status-bar";
import Header from "@src/components/onboarding/Header";
import { FontStyles } from "@src/style/general";
import { Font, FontSize } from "@src/style/fonts";
import Features from "@src/components/paywall/Features";
import FeatureItem from "@src/components/paywall/FeatureItem";
import PaymentContainer from "@src/components/paywall/PaymentContainer";
import PaymentOption from "@src/components/paywall/PaymentOption";
import FlowButton from "@src/components/UI/FlowButton";

const Paywall: React.FC<OnboardingScreenProps> = ({ navigation, route }) => {
  const headerTitle = (
    <Text style={FontStyles.paywallHeaderTitle}>
      <Text style={{ fontFamily: Font.ExtraBold, color: "white" }}>
        PlantApp
      </Text>{" "}
      Premium
    </Text>
  );

  const headerSubtitle = (
    <Text style={[FontStyles.paywallHeaderSubtitle]}>Access All Features</Text>
  );

  return (
    <View style={{ backgroundColor: "#101e17", height: "100%", width: "100%" }}>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.backgroundImg}
        source={IMAGES.paywall.background}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            height: ch(24),
            width: ch(24),
            top: ch(55),
            left: cw(335),
            borderRadius: 24,
            backgroundColor: "#00000066",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("BottomTab", { vanishMode: "slideDown" });
          }}
        >
          <Image
            style={{ height: ch(8), width: ch(8) }}
            source={require("@src/assets/icons/Close.png")}
          />
        </TouchableOpacity>
        <Header
          top={ch(264)}
          height={ch(47)}
          title={headerTitle}
          subtitle={headerSubtitle}
        />
        <Features>
          <FeatureItem
            image={require("@src/assets/icons/Scanner.png")}
            title="Unlimited"
            subtitle="Plant Identify"
          />
          <FeatureItem
            image={require("@src/assets/icons/Speed.png")}
            title="Faster"
            subtitle="Process"
          />
          <FeatureItem
            image={require("@src/assets/icons/Speed.png")}
            title="Faster"
            subtitle="Prdocess"
          />
        </Features>
      </ImageBackground>
      <PaymentContainer>
        <PaymentOption />
        <PaymentOption />
        <TouchableOpacity style={styles.button}>
          <View>
            <Text style={{ fontSize: 16, color: "white" }}>
              Try free for 3 days
            </Text>
          </View>
        </TouchableOpacity>
      </PaymentContainer>
      <Text
        style={{
          marginTop: ch(8),
          fontSize: FontSize.SIZE9,
          maxWidth: cw(327),
          textAlign: "center",
          alignSelf: "center",
          fontFamily: Font.Light,
          color: "#FFFFFF85",
        }}
      >
        After the 3-day free trial period you’ll be charged ₺274.99 per year
        unless you cancel before the trial expires. Yearly Subscription is
        Auto-Renewable
      </Text>
      <Text
        style={{
          marginTop: ch(10),
          fontFamily: Font.Regular,
          fontSize: FontSize.SIZE11,
          color: "#FFFFFF80",
          width: cw(327),
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Terms {" • "} Privacy {" • "} Restore
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    top: 0,
    height: ch(490),
    width: cw(375),
  },
  button: {
    height: ch(52),
    width: cw(327),
    backgroundColor: "#28AF6E",
    borderRadius: 14,
    zIndex: 44,
    alignSelf: "center",
    marginTop: ch(10),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Paywall;
