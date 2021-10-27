import React from "react"
import classes from "./QuizQuestion.module.css"

const QuizQuestion = ({ question }) => {
  return <div className={classes.quiz_question}>{question?.question}</div>
}

export default QuizQuestion
