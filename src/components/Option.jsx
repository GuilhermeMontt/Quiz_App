import { QuizContext } from "../context/quiz"
import { useContext } from "react";

import "./Option.css";

const Option = ({ option , answer, selectOption}) => {
    const [QuizState, dispatch] = useContext(QuizContext);

    const handleAnswer = () => {
        if(QuizState.answerSelected) {
            if(option === answer) {
                return "correct";
            } else {
                return "wrong";
            } 
        } else {
            return "";
        }
    }

    return (
        <div className={"option "+ handleAnswer()} onClick={() => selectOption()}>
            <p>{option}</p>
        </div>
    )
}

export default Option