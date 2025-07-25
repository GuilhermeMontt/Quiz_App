import { QuizContext } from "../context/quiz"
import { useContext } from "react";

import "./Option.css";

const Option = ({ option }) => {
    const [QuizState, dispatch] = useContext(QuizContext);

    return (
        <div className="option">
            <p>{option}</p>
        </div>
    )
}

export default Option