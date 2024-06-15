import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "../types";

const Paywall: React.FC<StackScreenProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Text>Paywall</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("BottomTab");
        }}
      />
    </SafeAreaView>
  );
};

export default Paywall;
