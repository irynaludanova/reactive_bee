import React from "react"
import { useRef } from "react"
import { MyButton } from "../../UI/button/MyButton"
import classes from "./StartQuiz.module.css"
const StartQuiz = ({ setUsername }) => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value)
  }
  return (
    <div className={classes.start}>
      <input
        className={classes.startInput}
        placeholder="enter your name"
        ref={inputRef}
      />
      <MyButton onClick={handleClick}>Start</MyButton>
    </div>
  )
}

export default StartQuiz
