import BaseNavigator from "@src/navigation/BaseNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <BaseNavigator />
    </>
  );
}
