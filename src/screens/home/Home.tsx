import { View, Text } from "react-native";
import React from "react";
import { OnboardingScreenProps } from "../types";

const Home: React.FC<OnboardingScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
