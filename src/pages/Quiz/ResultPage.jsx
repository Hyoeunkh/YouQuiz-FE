import React from 'react';
import { useParams } from 'react-router-dom';

import FirstResult from './Student/Result/FirstResult';
import SecondResult from './SecondResult';
import ThirdResult from './ThirdResult';
import QuizMedia from './QuizMedia';
import AnswerResult from './Student/Result/AnswerResult';
import QuizComplate from './QuizComplete';

function ResultPage() {
  const { Result_number } = useParams();

  let ResultComponent;

  if (Result_number === 'media') {
    ResultComponent = QuizMedia;
  } else if (Result_number === '1') {
    ResultComponent = FirstResult;
  }else if (Result_number === '2') {
    ResultComponent = SecondResult;
  } else if (Result_number === '3') {
    ResultComponent = ThirdResult;
  }  else if (Result_number === '4') {
    ResultComponent = AnswerResult;
  }  else if (Result_number === 'complete') {
    ResultComponent = QuizComplate;
  }

  return <ResultComponent />;
}

export default ResultPage;