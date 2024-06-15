import { View, Text } from "react-native";
import React from "react";
import { StackScreenProps } from "../types";

const Home: React.FC<StackScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
