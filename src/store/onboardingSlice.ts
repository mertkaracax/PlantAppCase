import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OnboardingState {
  completed: boolean;
}

const initialState: OnboardingState = {
  completed: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    completeOnboarding(state) {
      state.completed = true;
    },
    setOnboardingState(state, action: PayloadAction<boolean>) {
      state.completed = action.payload;
    },
  },
});

export const { completeOnboarding, setOnboardingState } =
  onboardingSlice.actions;

export default onboardingSlice.reducer;
