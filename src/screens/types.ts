export interface OnboardingScreenProps {
  navigation?: any;
  route?: any;
}

export interface SwiperProps {
  navigation?: any;
  route?: any;
}

export enum NavigatorNames {
  OnboardingNavigator = "Onboarding",
  BottomTabNavigator = "BottomTab",
}

export enum OnboardingScreenNames {
  ONBOARDING_ONE = "OnboardingOne",
  ONBOARDING_TWO = "OnboardingTwo",
  ONBOARDING_THREE = "OnboardingThree",
}
