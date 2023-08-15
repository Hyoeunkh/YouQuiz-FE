import React from 'react';
import { useParams } from 'react-router-dom';

import FirstResult from './Student/Result/FirstResult';
import SecondResult from './Student/Result/SecondResult';
import ThirdResult from './Student/Result/ThirdResult';
import QuizMedia from './Common/QuizMedia';
import AnswerResult from './Student/Result/AnswerResult';
import QuizComplate from './Common/QuizComplete';

function ResultPage( prop ) {
  const { result_number } = useParams();

  const resultComponents = {
    "media" : QuizMedia,
    '1': FirstResult,
    '2': SecondResult,
    '3': ThirdResult,
    '4': AnswerResult,
    "complete" : QuizComplate,
  };
  const ResultComponent = resultComponents[result_number];

  if (!ResultComponent) {
    return <div>잘못된 Page입니다.</div>;
  }
  return <ResultComponent prop={prop}/>;
}

export default ResultPage;