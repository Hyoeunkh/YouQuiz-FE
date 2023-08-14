import React from 'react';
import { useParams } from 'react-router-dom';

import FirstQuestion from './Student/Question/FirstQuestion';
import SecondQuestion from './Student/Question/SecondQuestion';
import ThirdQuestion from './Student/Question/ThirdQuestion';
import QuizMedia from './Common/QuizMedia';
import AnswerQuestion from './Student/Question/AnswerQuestion';
import QuizComplate from './Common/QuizComplete';

function QuestionPage() {
  const { question_number } = useParams();

  const questionComponents = {
    media: QuizMedia,
    '1': FirstQuestion,
    '2': SecondQuestion,
    '3': ThirdQuestion,
    '4': AnswerQuestion,
    complete: QuizComplate,
  };
  const QuestionComponent = questionComponents[question_number];

  if (!QuestionComponent) {
    return <div>잘못된 Page입니다.</div>;
  }
  return <QuestionComponent />;
}

export default QuestionPage;