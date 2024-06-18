import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Paywall from "@src/screens/paywall/Paywall";
import OnboardingNavigator from "./OnboardingNavigator";
import Intro from "@src/screens/intro/Intro";

// import SwiperComponent from "@src/screens/onboarding/Swiper";

const BaseNavigatior = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ title: "Paywall" }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingNavigator}
          options={{ title: "Onboarding" }}
        />
        <Stack.Screen
          name="Paywall"
          component={Paywall}
          options={{
            title: "Paywall",
          }}
        />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigatior;
