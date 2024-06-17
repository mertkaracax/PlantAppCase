import { ch, cw } from "./dimensions";

export enum Font {
  Light = "Rubik_300Light",
  Regular = "Rubik_400Regular",
  Medium = "Rubik_500Medium",
  SemiBold = "Rubik_600SemiBold",
  Bold = "Rubik_700Bold",
  ExtraBold = "Rubik_800ExtraBold",
  Black = "Rubik_900Black",
}

export enum FontSize {
  SIZE11 = <number>cw(11),
  SIZE15 = <number>cw(15),
  SIZE16 = <number>cw(16),
  SIZE24 = <number>cw(24),
  SIZE28 = <number>cw(28),
  SIZE30 = <number>cw(30),
}

export enum LetterSpace {
  TIGHT = <number>cw(-1),
  NORMAL = <number>cw(0.07),
}

export enum DotSize {
  BIG = <number>ch(10),
  SMALL = <number>ch(6),
  BIG_RADIUS = <number>ch(5),
  SMALL_RADIUS = <number>ch(3),
}
