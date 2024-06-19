import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ch, cw } from "@src/style/dimensions";
import { Font, FontSize } from "@src/style/fonts";
import { get } from "@src/api/api";
import { Question } from "@src/models/question";
import QuestionItem from "./QuestionItem";
import { Endpoints } from "@src/api/endpoints";

const QuestionsContainer = () => {
  const [questions, setQuestions] = useState<Array<Question>>([]);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await get(Endpoints.GET_QUESTIONS);
      setQuestions(response);
    };
    getQuestions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get Started</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {questions &&
          questions.map((questionItem) => (
            <QuestionItem question={questionItem} key={questionItem.id} />
          ))}
      </ScrollView>
    </View>
  );
};

export default QuestionsContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: ch(24),
    marginLeft: cw(24),
    height: ch(200),
  },
  text: {
    fontSize: FontSize.SIZE15,
    fontFamily: Font.Medium,
    marginBottom: ch(16),
  },
});
