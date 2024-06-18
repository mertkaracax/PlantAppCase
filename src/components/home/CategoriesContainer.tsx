import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import { get } from "@src/api/api";
import { Category } from "@src/models/category";
import CategoryItem from "./CategoryItem";

const CategoriesContainer = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await get("/getCategories");
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <View style={{ minHeight: ch(230) }}>
      <View style={styles.container}>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id.toString()} />
        ))}
        {/* <FlatList
          data={categories}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryItem category={item} key={item.id.toString()} />
          )}
        ></FlatList> */}
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
