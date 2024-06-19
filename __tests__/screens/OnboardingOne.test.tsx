import React from "react";
import OnboardingOne from "@src/screens/onboarding/OnboardingOne";
import renderer, {
  ReactTestRenderer,
  ReactTestInstance,
} from "react-test-renderer";
import { OnboardingScreenNames } from "@src/screens/types";
import Header from "@src/components/UI/Header";
import PaginationIndicator from "@src/components/onboarding/PaginationIndicator";

jest.mock("@src/components/UI/Header", () => "Header");
jest.mock(
  "@src/components/onboarding/OnboardingButton",
  () => "OnboardingButton"
);
jest.mock(
  "@src/components/onboarding/PaginationIndicator",
  () => "PaginationIndicator"
);
jest.mock("react-native-safe-area-context", () => ({
  SafeAreaView: "SafeAreaView",
}));
jest.mock("@src/hooks/navigationHooks", () => ({
  useBackBlocker: jest.fn(),
}));
jest.mock("@src/assets/images", () => ({
  IMAGES: {
    onboarding_2: {
      brush: "brush.png",
      background: "background.png",
    },
  },
}));

describe("OnboardingOne", () => {
  let component: ReactTestRenderer;
  let root: ReactTestInstance;
  const mockNavigate = jest.fn();

  beforeEach(() => {
    component = renderer.create(
      <OnboardingOne navigation={{ navigate: mockNavigate }} route={{}} />
    );
    root = component.root;
  });

  test("renders correctly", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("contains correct header title", () => {
    const header = root.findByType(Header);
    expect(header.props.title.props.children).toContain("Take a photo to");
  });

  test("navigates to OnboardingTwo when Continue button is pressed", () => {
    const button = root.findByProps({ title: "Continue" });
    button.props.onPress();
    expect(mockNavigate).toHaveBeenCalledWith(
      OnboardingScreenNames.ONBOARDING_TWO
    );
  });

  test("renders PaginationIndicator with correct active screen", () => {
    const paginationIndicator = root.findByType(PaginationIndicator);
    expect(paginationIndicator.props.active_screen).toBe(
      OnboardingScreenNames.ONBOARDING_ONE
    );
  });

  test("displays brush image", () => {
    const brushImage = root.findByProps({ source: "brush.png" });
    expect(brushImage).toBeTruthy();
  });

  test("displays background image", () => {
    const backgroundImage = root.findByProps({ source: "background.png" });
    expect(backgroundImage).toBeTruthy();
  });
});
