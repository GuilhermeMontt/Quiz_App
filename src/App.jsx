import './App.css'
import Welcome from './components/Welcome'
import Questions from './components/Questions'
import GameOver from './components/GameOver'
import { QuizContext } from './context/quiz'
import {useContext, useEffect} from 'react'


function App() {
  const [QuizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, [])

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {QuizState.gameStage === "Start" && <Welcome />}
      {QuizState.gameStage === "Playing" && <Questions />}
      {QuizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
