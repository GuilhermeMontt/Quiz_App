import './App.css'
import Welcome from './components/Welcome'
import Questions from './components/Questions'
import { QuizContext } from './context/quiz'
import {useContext} from 'react'


function App() {
  const [QuizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {QuizState.gameStage === "Start" && <Welcome />}
      {QuizState.gameStage === "Playing" && <Questions />}
    </div>
  )
}

export default App
