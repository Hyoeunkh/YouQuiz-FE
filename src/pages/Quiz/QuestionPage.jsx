import React from 'react';
import { useParams } from 'react-router-dom';

import FirstQuestion from './Student/Question/FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import QuizMedia from './QuizMedia';
import AnswerQuestion from './Student/Question/AnswerQuestion';
import QuizComplate from './QuizComplete';

function QuestionPage() {
  const { question_number } = useParams();

  let QuestionComponent;

  if (question_number === 'media') {
    QuestionComponent = QuizMedia;
  } else if (question_number === '1') {
    QuestionComponent = FirstQuestion;
  }else if (question_number === '2') {
    QuestionComponent = SecondQuestion;
  } else if (question_number === '3') {
    QuestionComponent = ThirdQuestion;
  }  else if (question_number === '4') {
    QuestionComponent = AnswerQuestion;
  }  else if (question_number === 'complete') {
    QuestionComponent = QuizComplate;
  }

  return <QuestionComponent />;
}

export default QuestionPage;