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
  SIZE9 = <number>cw(9),
  SIZE10 = <number>cw(10),
  SIZE11 = <number>cw(11),
  SIZE12 = <number>cw(12),
  SIZE13 = <number>cw(13),
  SIZE15 = <number>cw(15),
  SIZE15_5 = <number>cw(15.5),
  SIZE16 = <number>cw(16),
  SIZE17 = <number>cw(17),
  SIZE20 = <number>cw(20),
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

export enum LineHeight {
  LINE33_18 = <number>ch(33.18),
}
