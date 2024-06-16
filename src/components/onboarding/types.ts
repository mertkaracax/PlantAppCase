import { ReactNode } from "react";
import { DimensionValue } from "react-native";

export type HeaderProps = {
  title: ReactNode;
  subtitle?: string;
  width?: number | "auto" | DimensionValue;
  height?: number | "auto" | DimensionValue;
};
