export const sendChoicesToBackend = (studentId, chapId, answerList, answerSentence) => {
    const requestBody = {
      answer_list: answerList,
      answer_sentence: answerSentence,
    };
  
    return fetch(`http://52.78.142.246:8080/student/${studentId}/study/${chapId}`, {
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