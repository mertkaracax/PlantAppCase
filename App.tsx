import BaseNavigator from "@src/navigation/BaseNavigator";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
  // Rubik_300Light_Italic,
  // Rubik_400Regular_Italic,
  // Rubik_500Medium_Italic,
  // Rubik_600SemiBold_Italic,
  // Rubik_700Bold_Italic,
  // Rubik_800ExtraBold_Italic,
  // Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";

export default function App() {
  useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
    // Rubik_300Light_Italic,
    // Rubik_400Regular_Italic,
    // Rubik_500Medium_Italic,
    // Rubik_600SemiBold_Italic,
    // Rubik_700Bold_Italic,
    // Rubik_800ExtraBold_Italic,
    // Rubik_900Black_Italic,
  });
  return (
    <>
      <StatusBar style="dark" />
      <BaseNavigator />
    </>
  );
}
