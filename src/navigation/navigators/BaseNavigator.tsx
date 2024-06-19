import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomTabNavigator from "./BottomTabNavigator";
import Paywall from "@src/screens/paywall/Paywall";
import OnboardingNavigator from "./OnboardingNavigator";
import Intro from "@src/screens/intro/Intro";
import { RootState } from "@src/store/redux";
import { setOnboardingState } from "@src/store/onboardingSlice";
import { Color } from "@src/style/colors";

const BaseNavigator = () => {
  const Stack = createNativeStackNavigator();

  const dispatch = useDispatch();
  const onboardingCompleted = useSelector(
    (state: RootState) => state.onboarding.completed
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const completed = await AsyncStorage.getItem("onboardingCompleted");
        if (completed !== null) {
          dispatch(setOnboardingState(JSON.parse(completed)));
        }
      } catch (error) {
        console.error("Failed to load onboarding status", error);
      } finally {
        setLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  useEffect(() => {
    if (onboardingCompleted) {
      AsyncStorage.setItem("onboardingCompleted", JSON.stringify(true));
    }
  }, [onboardingCompleted]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Color.OnboardingButtonBg} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!onboardingCompleted ? (
          <>
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{ title: "Intro" }}
            />
            <Stack.Screen
              name="Onboarding"
              component={OnboardingNavigator}
              options={{
                title: "Onboarding",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Paywall"
              component={Paywall}
              options={{ title: "Paywall", gestureEnabled: false }}
            />
            <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
          </>
        ) : (
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigator;
