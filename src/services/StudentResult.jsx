export const sendChoicesToBackend = (studentId, chapId, answerList, answerSentence) => {
    const requestBody = {
      answer_list: answerList,
      answer_sentence: answerSentence,
    };
  
    return fetch(`/api/student/${studentId}/study/${chapId}`, { //이렇게 하는거 맞나요?
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
  