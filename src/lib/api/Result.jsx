import { useState } from 'react';
import ResultPage from '../../pages/Quiz/ResultPage';
import axios from 'axios';


export default function Result() {
  const [resultPage, setResultPage] = useState([]);

  const resultAPI = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/study_result"
      );
      setResultPage(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  resultAPI();

  return (
    <ResultPage data={resultPage} />
  );
}

