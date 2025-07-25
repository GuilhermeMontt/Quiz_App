import React from 'react'
import Quiz from '../img/quiz.svg'
import './Welcome.css'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Welcome = () => {
  const [QuizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão para iniciar</p>
        <button onClick={() => dispatch({type: "CHANGE_STAGE"})}>Iniciar Quiz</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome