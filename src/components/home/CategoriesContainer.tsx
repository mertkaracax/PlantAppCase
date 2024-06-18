import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import { Category } from "@src/models/category";
import CategoryItem from "./CategoryItem";
import { getReduxCategories } from "@src/store/redux";

type CategoriesContainerProps = {
  filter?: string;
};

const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  filter = "",
}) => {
  const reduxCategories = getReduxCategories();

  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    if (reduxCategories) {
      setCategories(reduxCategories);
    }
  }, [reduxCategories]);

  return (
    <View style={{ minHeight: ch(230) }}>
      <View style={styles.container}>
        {categories &&
          categories
            .filter((category) => {
              return category.title
                .toLowerCase()
                .startsWith(filter?.toLowerCase());
            })
            .map((category) => (
              <CategoryItem category={category} key={category.id.toString()} />
            ))}
      </View>
    </View>
  );
};

export default CategoriesContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: ch(24),
    alignSelf: "center",
    width: cw(327),
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: FontSize.SIZE15,
    fontFamily: Font.Medium,
    marginBottom: ch(16),
  },
});
