export const sendChoicesToBackend = (studentId, chapId, answerList, answerSentence) => {
    const requestBody = {
      answer_list: answerList,
      answer_sentence: answerSentence,
    };
  
    return fetch(`/{PROTOCOL}/{HOST}:{port}/student/${studentId}/study/${chapId}`, {
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
  