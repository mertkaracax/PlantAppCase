import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { OnboardingScreenProps } from "../types";
import Header from "@src/components/onboarding/Header";
import { StatusBar } from "expo-status-bar";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import Inbox from "@src/components/home/Inbox";
import QuestionContainer from "@src/components/home/QuestionContainer";
import CategoriesContainer from "@src/components/home/CategoriesContainer";
import { completeOnboarding } from "@src/store/onboardingSlice";
import { useDispatch } from "react-redux";

const Home: React.FC<OnboardingScreenProps> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const completeOnboardingFlow = () => {
    dispatch(completeOnboarding());
  };

  useEffect(() => {
    completeOnboardingFlow();
  }, []);

  const [filter, onChangeFilter] = useState("");
  const title = (
    <Text
      style={{
        fontFamily: Font.Regular,
        fontSize: FontSize.SIZE16,
        lineHeight: 18.96,
      }}
    >
      Hi, plant lover!
    </Text>
  );

  const subtitle = (
    <Text
      style={{
        color: "#13231B",
        fontSize: FontSize.SIZE24,
        fontFamily: Font.Medium,
      }}
    >
      Good Afternoon! ⛅
    </Text>
  );
  return (
    <>
      <StatusBar style="dark" />
      <View
        style={{
          height: ch(175),
          width: "100%",
          position: "relative",
        }}
      >
        <Header marginTop={ch(50)} title={title} subtitle={subtitle} />
        <View style={styles.textInputContainer}>
          <Image
            style={{
              height: cw(15),
              width: cw(15),
              marginRight: cw(12),
            }}
            source={require("@src/assets/icons/Search.png")}
          />
          <TextInput
            placeholder="Search for plants"
            onChangeText={onChangeFilter}
            style={{
              fontFamily: Font.Regular,
              fontSize: FontSize.SIZE15_5,
              lineHeight: 18.37,
              letterSpacing: 0.07,
              flex: 1,
            }}
          />
        </View>
        <Image
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: cw(110),
            height: ch(80),
            opacity: 0.54,
          }}
          source={require("@src/assets/images/home/LeftLeaf.png")}
        />
        <Image
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: cw(110),
            height: ch(80),
            opacity: 0.54,
          }}
          source={require("@src/assets/images/home/RightLeaf.png")}
        />
        <View
          style={{
            backgroundColor: "white",
            height: ch(553),
            marginTop: ch(24),
          }}
        >
          <ScrollView>
            <Inbox />
            <QuestionContainer />
            <CategoriesContainer filter={filter} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: cw(327),
    height: ch(44),
    marginTop: ch(14),
    borderWidth: 0.2,
    borderRadius: 12,
    borderColor: "#3C3C4340",
    alignSelf: "center",
    zIndex: 3,
    backgroundColor: "#FFFFFFE0",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: cw(12),
  },
});

export default Home;
