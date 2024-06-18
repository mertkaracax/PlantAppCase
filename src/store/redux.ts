import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./slices/categorySlice";
import questionReducer from "./slices/questionSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    questions: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const getReduxCategories = () => {
  return useTypedSelector((state) => state.categories.categories);
};

const getReduxQuestions = () => {
  return useTypedSelector((state) => state.questions.questions);
};

export { getReduxCategories, getReduxQuestions };
