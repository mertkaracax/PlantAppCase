import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { RouteProps } from "../types";
import Header from "@src/components/UI/Header";
import { StatusBar } from "expo-status-bar";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import Inbox from "@src/components/home/Inbox";
import QuestionsContainer from "@src/components/home/QuestionsContainer";
import CategoriesContainer from "@src/components/home/CategoriesContainer";
import { completeOnboarding } from "@src/store/onboardingSlice";
import { useDispatch } from "react-redux";
import { ICONS } from "@src/assets/icons";

const Home: React.FC<RouteProps> = ({ navigation, route }) => {
  const [filter, onChangeFilter] = useState("");

  const dispatch = useDispatch();

  const completeOnboardingFlow = useCallback(() => {
    dispatch(completeOnboarding());
  }, [dispatch]);

  useEffect(() => {
    completeOnboardingFlow();
  }, []);

  const title = useMemo(
    () => <Text style={styles.titleText}>Hi, plant lover!</Text>,
    []
  );

  const getGreeting = useCallback(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning! ☀️";
    } else if (hour < 18) {
      return "Good Afternoon! ⛅";
    } else {
      return "Good Evening! 🌙";
    }
  }, []);

  const subtitle = useMemo(
    () => <Text style={styles.subtitleText}>{getGreeting()}</Text>,
    []
  );

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.headerContainer}>
        <Header marginTop={ch(50)} title={title} subtitle={subtitle} />
        <View style={styles.textInputContainer}>
          <Image style={styles.searchIcon} source={ICONS.search} />
          <TextInput
            placeholder="Search for plants"
            onChangeText={onChangeFilter}
            style={styles.textInput}
          />
        </View>
        <Image
          style={styles.leftLeafImage}
          source={require("@src/assets/images/home/LeftLeaf.png")}
        />
        <Image
          style={styles.rightLeafImage}
          source={require("@src/assets/images/home/RightLeaf.png")}
        />
        <View style={styles.contentContainer}>
          <ScrollView>
            <Inbox />
            <QuestionsContainer />
            <CategoriesContainer filter={filter} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: ch(175),
    width: "100%",
    position: "relative",
  },
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
  searchIcon: {
    height: cw(15),
    width: cw(15),
    marginRight: cw(12),
  },
  textInput: {
    fontFamily: Font.Regular,
    fontSize: FontSize.SIZE15_5,
    lineHeight: 18.37,
    letterSpacing: 0.07,
    flex: 1,
  },
  leftLeafImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: cw(110),
    height: ch(80),
    opacity: 0.54,
  },
  rightLeafImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: cw(110),
    height: ch(80),
    opacity: 0.54,
  },
  contentContainer: {
    backgroundColor: "white",
    height: ch(553),
    marginTop: ch(24),
  },
  titleText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.SIZE16,
    lineHeight: 18.96,
  },
  subtitleText: {
    color: "#13231B",
    fontSize: FontSize.SIZE24,
    fontFamily: Font.Medium,
  },
});

export default React.memo(Home);
