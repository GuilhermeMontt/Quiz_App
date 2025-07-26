import { createContext, useReducer } from "react";
import questions from "../data/questions";

const stages = ["Start", "Playing", "End"];

const initialState = {
    gameStage: stages[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (state, action) => {
    switch (action.type){
        case "CHANGE_STAGE":
            return {
                ...state,
                gameStage: stages[1]
            };
        
        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => Math.random() - 0.5);
            return {
                ...state,
                questions: reorderedQuestions
            }
        case "CHANGE_QUESTION":
            state.answerSelected = false; // Reset answer selection
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;
            if (!state.questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? stages[2] : state.gameStage,
            }
        
        case "RESTART_GAME":
            const reorderedQuestionsAgain = state.questions.sort(() => Math.random() - 0.5);
            return {
                ...state,
                gameStage: stages[0],
                currentQuestion: 0,
                score: 0,
                questions: reorderedQuestionsAgain
            }
        
        case "CHECK_ANS":
            if(state.answerSelected) return state; // Prevent multiple selections

            const { answer, option } = action.payload;
            let correctAnswer = false;

            if (answer === option) {
                correctAnswer = true;
            }

            return {
                ...state,
                score: correctAnswer ? state.score + 1 : state.score,
                answerSelected: true
            }

        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
}