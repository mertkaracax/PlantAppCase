import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import { ICONS } from "@src/assets/icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Color } from "@src/style/colors";
import { Font, FontSize, LetterSpace } from "@src/style/fonts";

const CustomTabBar: React.FC<BottomTabBarProps> = () => {
  const handleUnexpectedEvents = () => {
    Alert.alert("This screen has not been designed yet.");
  };
  return (
    <View style={styles.tabBar}>
      <Image
        style={{
          width: cw(78),
          height: ch(64),
          alignSelf: "center",
          resizeMode: "contain",
          position: "absolute",
          left: cw(151),
          bottom: ch(43),
        }}
        source={ICONS.greenScanner}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.tabButton}>
          <Image style={styles.icon} source={ICONS.home} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleUnexpectedEvents}
          style={styles.tabButton}
        >
          <Image style={styles.icon} source={ICONS.diagnose} />
          <Text style={styles.text}>Diagnose</Text>
        </TouchableOpacity>
        <View style={{ width: cw(79) }}></View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={handleUnexpectedEvents}
          style={styles.tabButton}
        >
          <Image style={styles.icon} source={ICONS.myGarden} />
          <Text style={styles.text}>My Garden</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleUnexpectedEvents}
          style={styles.tabButton}
        >
          <Image style={styles.icon} source={ICONS.profile} />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Color.WHITE,
    height: ch(84),
    flexDirection: "row",
    width: "100%",
  },
  tabButton: {
    width: cw(74),
    height: ch(49),
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: ch(7.79),
  },
  icon: {
    height: ch(25),
    width: ch(25),
    marginBottom: ch(7.55),
  },
  text: {
    fontSize: FontSize.SIZE10,
    fontFamily: Font.Regular,
    color: "#979798",
    letterSpacing: LetterSpace.TIGHT_024,
  },
});
