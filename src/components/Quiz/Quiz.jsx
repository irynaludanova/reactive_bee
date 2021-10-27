import { React, useEffect, useState } from "react"
import "./Quiz.css"
import QuizQuestion from "../QuizQuestion/QuizQuestion"
import QuizAnswers from "../QuizAnswers/QuizAnswers"
const Quiz = ({ data, questionNumber, setQuestionNumber, setTimeOut }) => {
  const [question, setQuestion] = useState(null)

  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])

  return (
    <div className="quiz">
      <QuizQuestion question={question} />
      <QuizAnswers
        setQuestionNumber={setQuestionNumber}
        setTimeOut={setTimeOut}
        question={question}
      />
    </div>
  )
}

export default Quiz
