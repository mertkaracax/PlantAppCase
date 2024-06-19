import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import { Color } from "@src/style/colors";

type FeatureItemProps = {
  image: any;
  title: string;
  subtitle: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default FeatureItem;

const styles = StyleSheet.create({
  container: {
    width: cw(156),
    height: ch(130),
    padding: ch(16),
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: Color.FeatureItemBackgroundColor,
    borderRadius: 14,
    marginRight: cw(8),
  },
  imageContainer: {
    width: cw(36),
    height: ch(35.68),
    backgroundColor: "#0000003D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  image: {
    resizeMode: "contain",
    width: cw(18),
    height: cw(18),
  },
  title: {
    color: "white",
    lineHeight: 24,
    fontFamily: Font.Medium,
    fontSize: FontSize.SIZE20,
  },
  subtitle: {
    lineHeight: 18,
    fontFamily: Font.Regular,
    fontSize: FontSize.SIZE13,
    color: "#FFFFFFB2",
  },
});
