import { ch } from "./dimensions";

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
  SIZE11 = <number>ch(11),
  SIZE15 = <number>ch(15),
  SIZE16 = <number>ch(16),
  SIZE28 = <number>ch(28),
}
