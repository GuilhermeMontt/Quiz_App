import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Questions = () => {
  const [QuizState, dispatch] = useContext(QuizContext);

  return (
    <div>Questions</div>
  )
}

export default Questions