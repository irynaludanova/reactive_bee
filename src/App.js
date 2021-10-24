import React, { useMemo, useState } from "react"
import "./App.css"
import { PostFilter } from "./components/PostFilter/PostFilter"
import { PostForm } from "./components/PostForm/PostForm"
import { PostList } from "./components/PostList/PostList"
import { MyInput } from "./UI/input/MyInput"
import { MySelect } from "./UI/select/MySelect"
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "React post", body: "Post about React" },
    { id: 2, title: "Vue post", body: "Post about Vue" },
    { id: 3, title: "Angular post", body: "Post about Angular" },
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Post List"
      />
    </div>
  )
}

export default App
