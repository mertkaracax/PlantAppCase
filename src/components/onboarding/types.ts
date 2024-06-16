import { ReactNode } from "react";

export type HeaderProps = {
  title: ReactNode;
  subtitle?: string;
  width?: number | "auto";
  height?: number | "auto";
};
