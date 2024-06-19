import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import { ch, cw } from "@src/style/dimensions";
import PaymentOption from "./PaymentOption";

const PaymentContainer: React.FC = () => {
  const [plan, setPlan] = useState("yearly");

  const changePlanHandler = useCallback((newPlan: string) => {
    setPlan(newPlan);
  }, []);

  return (
    <View style={styles.container}>
      <PaymentOption
        name="monthly"
        title="1 Month"
        description="$2.99/month, auto renewable"
        isActive={plan === "monthly"}
        onPress={changePlanHandler}
      />
      <PaymentOption
        name="yearly"
        title="1 Year"
        description="First 3 days free, then $529,29/year"
        isActive={plan === "yearly"}
        onPress={changePlanHandler}
      />
      <TouchableOpacity style={styles.paywallButton}>
        <View>
          <Text style={{ fontSize: 16, color: "white" }}>
            {plan === "yearly" ? "Try free for 3 days" : "Continue"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentContainer;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    marginTop: ch(19),
  },
  paywallButton: {
    height: ch(52),
    width: cw(327),
    backgroundColor: "#28AF6E",
    borderRadius: 14,
    zIndex: 44,
    alignSelf: "center",
    marginTop: ch(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
