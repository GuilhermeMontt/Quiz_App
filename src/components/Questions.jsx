import React from 'react'
import './Questions.css'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Option from './Option';

const Questions = () => {
  const [QuizState, dispatch] = useContext(QuizContext);
  const currentQuestion = QuizState.questions[QuizState.currentQuestion];

  return (
    <div id="questions">
        <p>Pergunta {QuizState.currentQuestion + 1} de {QuizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
            {currentQuestion.options.map((option) => (
                <Option option={option} key={option} />
            ))}
        </div>
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
        </button>
    </div>
  )
}

export default Questions