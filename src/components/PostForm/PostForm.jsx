import { React, useState } from "react"
import { MyButton } from "../../UI/button/MyButton"
import { MyInput } from "../../UI/input/MyInput"
import classes from "./PostForm.module.css"
export const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: "", body: "" })
  }
  return (
    <form className={classes.post_form}>
      <MyInput
        type="text"
        placeholder="Type title..."
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Type description..."
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  )
}
