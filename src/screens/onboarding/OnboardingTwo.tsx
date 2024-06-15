import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "../types";

const OnboardingTwo: React.FC<StackScreenProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Text>OnboardingTwo</Text>
      <Button
        title="3"
        onPress={() => {
          navigation.navigate("Onboarding_3");
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingTwo;
