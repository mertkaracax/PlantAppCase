import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "@src/models/category";

interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (
      state,
      action: PayloadAction<{ categories: Array<Category> }>
    ) => {
      state.categories = action.payload.categories;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
