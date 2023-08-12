import React from 'react';
import { useParams } from 'react-router-dom';

import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import QuizMedia from './QuizMedia';
import AnswerQuestion from './Student/AnswerQuestion';
import QuizComplate from './QuizComplete';
// ... 다른 문제 컴포넌트들을 가져옵니다.

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