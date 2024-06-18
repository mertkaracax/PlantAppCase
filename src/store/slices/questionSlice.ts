import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Question } from "@src/models/question";

interface CategoriesState {
  questions: Question[];
}

const initialState: CategoriesState = {
  questions: [],
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (
      state,
      action: PayloadAction<{ questions: Array<Question> }>
    ) => {
      state.questions = action.payload.questions;
    },
  },
});

export const { setQuestions } = questionSlice.actions;
export default questionSlice.reducer;
