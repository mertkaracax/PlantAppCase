import { StyleSheet, View } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import { Category } from "@src/models/category";
import CategoryItem from "./CategoryItem";
import { get } from "@src/api/api";
import { Endpoints } from "@src/api/endpoints";

type CategoriesContainerProps = {
  filter?: string;
};

const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  filter = "",
}) => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await get(Endpoints.GET_CATEGORIES);

      // The categories were sorted in descending order based on their IDs to ensure that newly added ones appear at the top.
      const sortedCategories: Array<Category> = response.data.sort(
        (current: Category, next: Category) => next.id - current.id
      );
      setCategories(sortedCategories);
    };
    getCategories();
  }, []);

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

export default memo(CategoriesContainer);

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
