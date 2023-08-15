import { useState } from 'react';
import ResultPage from '../../pages/Quiz/ResultPage';
import axios from 'axios';

export default function ResultAPI() {
  const [resultPage, setResultPage] = useState([]);

    axios.get("{PROTOCOL}/{HOST}:{port}/student/{student_id}/studystatus/{chapter_id}")
    .then(response => setResultPage(response.data))

  return (
    <ResultPage prop={resultPage} />
  );
}