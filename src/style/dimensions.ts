import { DimensionValue, Dimensions } from "react-native";

function calculateComponentWidth(width: number): DimensionValue {
  const deviceWidth = Dimensions.get("window").width;
  const baseRatio = width / 375;
  return deviceWidth * baseRatio;
}

function calculateComponentHeight(height: number): DimensionValue {
  const deviceHeight = Dimensions.get("window").height;
  const baseRatio = height / 812;
  return deviceHeight * baseRatio;
}

export { calculateComponentWidth as cw, calculateComponentHeight as ch };
