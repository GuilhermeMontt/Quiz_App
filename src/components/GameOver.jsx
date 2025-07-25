import "./GameOver.css";
import { QuizContext } from '../context/quiz';
import { useContext, useEffect } from 'react';
import welldoneImage from '../img/welldone.svg';

const GameOver = () => {
  return (
    <div id="gameover">
        <h2>
            Fim de Jogo
        </h2>
        <p>Sua pontuação foi x</p>
        <p>Você acertou y de z perguntas</p>
        <img src={welldoneImage} alt="Fim do Quiz" />
        <button>Reiniciar</button>
    </div>
  )
}

export default GameOver