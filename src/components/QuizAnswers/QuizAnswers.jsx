import { React, useState, useEffect } from "react"
import correct from "../../assets/sounds/correct.mp3"
import wrong from "../../assets/sounds/wrong.mp3"
import useSound from "use-sound"
import play from "../../assets/sounds/play.mp3"
import "./QuizAnswers.css"
const QuizAnswers = ({ question, setTimeOut, setQuestionNumber }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState("answer")
  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  useEffect(() => {
    letsPlay()
  }, [letsPlay])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  const handleClick = (a) => {
    setSelectedAnswer(a)
    setClassName("answer active")
    delay(2000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })

    delay(3000, () => {
      if (a.correct) {
        correctAnswer()
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1)
          setSelectedAnswer(null)
        })
      } else {
        wrongAnswer()
        delay(1000, () => {
          setTimeOut(true)
        })
      }
    })
  }
  return (
    <div className="answers">
      {question?.answers.map((a) => (
        <div
          className={selectedAnswer === a ? className : "answer"}
          onClick={() => !selectedAnswer && handleClick(a)}
        >
          {a.text}
        </div>
      ))}
    </div>
  )
}

export default QuizAnswers
