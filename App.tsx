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
} from "@expo-google-fonts/rubik";

import { Provider } from "react-redux";
import store from "@src/store/redux";

export default function App() {
  const [isLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
  });

  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      {isLoaded && <BaseNavigator />}
    </Provider>
  );
}
