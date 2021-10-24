import React from "react"
import { PostItem } from "../PostItem/PostItem"
import classes from "./PostList.module.css"
import { TransitionGroup, CSSTransition } from "react-transition-group"

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h2 className={classes.post_list_content}> Posts not found...</h2>
  }
  return (
    <div>
      <h1 className={classes.post_title}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
