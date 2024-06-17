import { ReactNode } from "react";
import { DimensionValue } from "react-native";

export type HeaderProps = {
  title: ReactNode;
  subtitle?: string | ReactNode;
  width?: number | "auto" | DimensionValue;
  height?: number | "auto" | DimensionValue;
  top?: number | "auto" | DimensionValue;
  left?: number | "auto" | DimensionValue;
};
