import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "../types";

const OnboardingOne: React.FC<StackScreenProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Text>OnboardingOne</Text>
      <Button
        title="2"
        onPress={() => {
          navigation.navigate("Onboarding_2");
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingOne;
