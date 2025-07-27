import React from 'react'
import './Questions.css'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Option from './Option';

const Questions = () => {
  const [QuizState, dispatch] = useContext(QuizContext);
  const currentQuestion = QuizState.questions[QuizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({ type: "CHECK_ANS", payload: {answer: currentQuestion.answer, option} });
  }

  return (
    <div id="questions">
        <p>Pergunta {QuizState.currentQuestion + 1} de {QuizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
            {currentQuestion.options.map((option) => (
                (option !== QuizState.optionToHide && (<Option 
                option={option} 
                key={option} 
                answer={currentQuestion.answer} 
                selectOption={() => onSelectOption(option)}
                />))
            ))}
        </div>
        {!QuizState.answerSelected &&
        (<>
          {
          currentQuestion.tip && QuizState.help === false && 
          (<button onClick={() => dispatch({ type: "SHOW_TIP"})}>
            Dica
          </button>)
          }
          {
            currentQuestion.tip && QuizState.help === "tip" && 
          (<p>{currentQuestion.tip}</p>)
          }
          {
            !QuizState.help && (
              <button onClick={() => dispatch({ type: "REMOVE_OPTION"})}>
                Eliminar uma opção
              </button>
            )
          }
        </>)
        }

        {QuizState.answerSelected && 
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
        </button>
        }
    </div>
  )
}

export default Questions