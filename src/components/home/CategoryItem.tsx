import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize, LetterSpace } from "@src/style/fonts";
import { Color } from "@src/style/colors";
import { Category } from "@src/models/category";

type CategoryItemParams = {
  category: Category;
};

const CategoryItem: React.FC<CategoryItemParams> = ({ category }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: category.image.url,
        }}
      />

      <Text style={styles.text}>{category.title}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: cw(158),
    height: ch(152),
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Color.CategoryItemBorderColor,
    marginBottom: ch(16),
    backgroundColor: "#F4F6F6",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    borderRadius: 12,
  },
  text: {
    position: "absolute",
    top: ch(16),
    left: cw(16),
    height: ch(64),
    maxWidth: cw(85),
    fontSize: FontSize.SIZE16,
    letterSpacing: LetterSpace.TIGHT_032,
    lineHeight: 21,
    fontFamily: Font.Medium,
    color: Color.HeaderText,
  },
});
