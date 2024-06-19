import React from "react";
import Intro from "@src/screens/intro/Intro";
import renderer, {
  ReactTestRenderer,
  ReactTestInstance,
} from "react-test-renderer";
import { RouteProps } from "@src/screens/types";
import Header from "@src/components/UI/Header";
import Footer from "@src/components/UI/Footer";

jest.mock("@src/components/UI/Header", () => "Header");
jest.mock(
  "@src/components/onboarding/OnboardingButton",
  () => "OnboardingButton"
);
jest.mock("@src/components/UI/Footer", () => "Footer");
jest.mock("react-native-safe-area-context", () => ({
  SafeAreaView: "SafeAreaView",
}));
jest.mock("@src/assets/images", () => ({
  IMAGES: {
    onboarding_1: {
      background: "background.png",
    },
  },
}));

describe("Intro", () => {
  let component: ReactTestRenderer;
  let root: ReactTestInstance;
  const mockNavigate = jest.fn();

  beforeEach(() => {
    component = renderer.create(
      <Intro navigation={{ navigate: mockNavigate }} route={{} as RouteProps} />
    );
    root = component.root;
  });

  test("renders correctly", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("navigates to Onboarding when Get Started button is pressed", () => {
    const button = root.findByProps({ title: "Get Started" });
    button.props.onPress();
    expect(mockNavigate).toHaveBeenCalledWith("Onboarding");
  });

  test("renders Footer component", () => {
    const footer = root.findByType(Footer);
    expect(footer).toBeTruthy();
  });
});
