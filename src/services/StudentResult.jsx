export const sendChoicesToBackend = (studentId, chapId, answerList, answerSentence) => {
    const requestBody = {
      answer_list: answerList,
      answer_sentence: answerSentence,
    };
  
    return fetch(`http://101.101.219.109:8080/student/${studentId}/study/${chapId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error sending choices to backend:", error);
      throw error;
    });
  };
  /* 이런형식으로 post해야함
    “answer_list”: [1, 4, 2, 4, 2],
    “answer_sentence”: “제 생각엔 …”  */
