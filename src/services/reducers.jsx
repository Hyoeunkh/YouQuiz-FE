import { combineReducers } from "redux";

export const addAnswer = (answer) => ({
    type: "ADD_ANSWER",
    payload: answer,
  });
  
  const initialState = {
    answers: [],
    subjectiveAnswer: "",
  };
  
  export const addSubjectiveAnswer = (answer) => {
    return {
      type: "ADD_SUBJECTIVE_ANSWER",
      payload: answer,
    };
  };

  const answersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ANSWER":
        return {
          ...state,
          answers: [...state.answers, action.payload],
        };
      case "ADD_SUBJECTIVE_ANSWER":
        return {
          ...state,
          subjectiveAnswer: action.payload,
        };
      default:
        return state;
    }
  };
  const studentNumberReducer = (state = null, action) => {
    switch (action.type) {
      case "SET_STUDENT_NUMBER":
        return action.payload;
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    studentNumber: studentNumberReducer,
  });

  export default answersReducer;