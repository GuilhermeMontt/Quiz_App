import "./PickCategory.css";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg"

const PickCategory = () => {
    const [QuizState, dispatch] = useContext(QuizContext);

    const chooseCategory = (category) => {
        dispatch({ type: "CHANGE_CATEGORY", payload: category });

        dispatch({ type: "REORDER_QUESTIONS" });
    }

    return (
        <div id="category">
            <h2>Escolha uma categoria</h2>
            <p>As perguntas serão referentes a uma das liguagens abaixo:</p>
            <div>
                {QuizState.questions.map((questions) => (
                    <button 
                    key={questions.category}
                    onClick={() => chooseCategory(questions.category)}
                    >
                        {questions.category}
                    </button>
                ))}
            </div>
            <img src={Category} alt="Categorias" />
        </div>
    )
}

export default PickCategory