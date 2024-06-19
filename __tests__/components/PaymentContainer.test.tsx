import React from "react";
import PaymentContainer from "@src/components/paywall/PaymentContainer";
import renderer, {
  ReactTestRenderer,
  ReactTestInstance,
  act,
} from "react-test-renderer";
import { Text, TouchableOpacity } from "react-native";

describe("PaymentContainer", () => {
  let component: ReactTestRenderer;
  let root: ReactTestInstance;

  beforeEach(() => {
    component = renderer.create(<PaymentContainer />);
    root = component.root;
  });

  test("renders correctly", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("initial plan state is yearly", () => {
    const yearlyButton = root.findByProps({ name: "yearly" });
    expect(yearlyButton.props.isActive).toBe(true);

    const monthlyButton = root.findByProps({ name: "monthly" });
    expect(monthlyButton.props.isActive).toBe(false);
  });

  test("changes plan to monthly when the monthly button is pressed", () => {
    const monthlyButton = root.findByProps({ name: "monthly" });
    act(() => {
      monthlyButton.props.onPress("monthly");
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const updatedYearlyButton = root.findByProps({ name: "yearly" });
    expect(updatedYearlyButton.props.isActive).toBe(false);

    const updatedMonthlyButton = root.findByProps({ name: "monthly" });
    expect(updatedMonthlyButton.props.isActive).toBe(true);
  });

  test("changes plan to yearly when the yearly button is pressed", () => {
    const yearlyButton = root.findByProps({ name: "yearly" });
    yearlyButton.props.onPress("yearly");

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const updatedYearlyButton = root.findByProps({ name: "yearly" });
    expect(updatedYearlyButton.props.isActive).toBe(true);

    const updatedMonthlyButton = root.findByProps({ name: "monthly" });
    expect(updatedMonthlyButton.props.isActive).toBe(false);
  });

  test("displays 'Try free for 3 days' when yearly plan is selected", () => {
    const button = root.findByType(TouchableOpacity).findByType(Text);
    expect(button.props.children).toBe("Try free for 3 days");
  });

  test("displays 'Continue' when monthly plan is selected", () => {
    const monthlyButton = root.findByProps({ name: "monthly" });
    monthlyButton.props.onPress("monthly");

    const button = root.findByType(TouchableOpacity).findByType(Text);
    expect(button.props.children).toBe("Continue");
  });
});
