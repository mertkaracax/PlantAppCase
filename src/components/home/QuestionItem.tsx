import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ch, cw } from "@src/style/dimensions";
import { Question } from "@src/models/question";
import { Font, FontSize } from "@src/style/fonts";
import { Color } from "@src/style/colors";

type QuestionItemParams = {
  question: Question;
};

const QuestionItem: React.FC<QuestionItemParams> = ({ question }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: question.image_uri,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{question.title}</Text>
      </View>
    </View>
  );
};

export default QuestionItem;

const styles = StyleSheet.create({
  container: {
    width: cw(240),
    height: ch(164),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFFFFF1A",
    marginRight: cw(10), // Öğeler arasında boşluk oluşturmak için
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    borderRadius: 12,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: ch(64),
    borderWidth: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginLeft: cw(14),
  },
  text: {
    maxWidth: cw(200),
    marginTop: ch(12),
    fontSize: FontSize.SIZE15,
    fontFamily: Font.Medium,
    color: Color.WHITE,
  },
});
