import React from "react"
import { PostItem } from "../PostItem/PostItem"
import classes from "./PostList.module.css"
export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h2 className={classes.post_list_content}> Posts not found...</h2>
  }
  return (
    <div>
      <h1 className="post_title">{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  )
}
