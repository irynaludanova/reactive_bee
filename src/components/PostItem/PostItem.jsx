import React from "react"
import { MyButton } from "../../UI/button/MyButton"
import classes from "./PostItem.module.css"

export const PostItem = (props) => {
  return (
    <div className={classes.post_container}>
      <div className={classes.post_content}>
        <h2>
          {props.post.id}. {props.post.title}
        </h2>
        <p>{props.post.body}</p>
        <div>
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  )
}
