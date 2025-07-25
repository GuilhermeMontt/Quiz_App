import "./GameOver.css";
import { QuizContext } from '../context/quiz';
import { useContext, useEffect } from 'react';
import welldoneImage from '../img/welldone.svg';

const GameOver = () => {
    const [QuizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>
            Fim de Jogo
        </h2>
        <p>Sua pontuação foi {QuizState.score}</p>
        <p>Você acertou {QuizState.score} de {QuizState.questions.length} perguntas</p>
        <img src={welldoneImage} alt="Fim do Quiz" />
        <button onClick={() => dispatch({ type: "RESTART_GAME" })}>Reiniciar</button>
    </div>
  )
}

export default GameOver