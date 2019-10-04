import React, {Component} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

export const SagasScreenComponent = ({trivia, requestQuestion}) => (
  <View>
    <Text>Question:</Text>
    {trivia.question ? (
      <View>
        <Text>{trivia.question.question}</Text>
        <Text>{trivia.question.correct_answer}</Text>
        {trivia.question.incorrect_answers.map(answer => (
          <Text key={answer}>{answer}</Text>
        ))}
      </View>
    ) : null}
    <TouchableOpacity onPress={requestQuestion}>
      <Text>Get new question</Text>
    </TouchableOpacity>
  </View>
)
