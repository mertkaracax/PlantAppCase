import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Paywall from "@src/screens/paywall/Paywall";
import OnboardingNavigator from "./OnboardingNavigator";
import Intro from "@src/screens/intro/Intro";
import { setQuestions } from "@src/store/slices/questionSlice";
import { get } from "@src/api/api";
import { useDispatch } from "react-redux";
import { setCategories } from "@src/store/slices/categorySlice";
import { Endpoints } from "@src/api/endpoints";

const BaseNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await get(Endpoints.GET_QUESTIONS);
        // console.log(response);
        dispatch(setQuestions({ questions: response }));
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    getQuestions();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await get(Endpoints.GET_CATEGORIES);
        // console.log(response);
        dispatch(setCategories({ categories: response.data }));
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    getCategories();
  }, []);

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

export default BaseNavigator;
