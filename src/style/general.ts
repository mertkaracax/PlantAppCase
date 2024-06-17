import { StyleSheet } from "react-native";
import { Font, FontSize, LetterSpace } from "./fonts";
import { Color } from "./colors";
import { ch, cw } from "./dimensions";

const generalFontStyles = StyleSheet.create({
  headerTitle: {
    fontFamily: Font.Regular,
    fontSize: FontSize.SIZE28,
    color: Color.HeaderText,
    lineHeight: 33.18,
    maxWidth: cw(315),
    letterSpacing: LetterSpace.NORMAL,
  },
  paywallHeaderTitle: {
    fontFamily: Font.Light,
    fontSize: FontSize.SIZE24,
    color: Color.WHITE,
    lineHeight: 33.18,
    maxWidth: cw(315),
    letterSpacing: LetterSpace.NORMAL,
  },
  headerSubtitle: {
    fontFamily: Font.Regular,
    marginTop: ch(5),
    color: Color.SubheaderText,
    fontSize: FontSize.SIZE16,
    lineHeight: 22,
    letterSpacing: 0.07,
  },
});

export { generalFontStyles as FontStyles };
