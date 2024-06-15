import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "../types";

const OnboardingThree: React.FC<StackScreenProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Text>OnboardingThree</Text>
      <Button
        title="Paywall"
        onPress={() => {
          navigation.navigate("Paywall");
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingThree;
