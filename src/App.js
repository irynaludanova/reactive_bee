import React, { useEffect, useState } from "react"
import "./App.css"
import { PostFilter } from "./components/PostFilter/PostFilter"
import { PostForm } from "./components/PostForm/PostForm"
import { PostList } from "./components/PostList/PostList"
import { usePosts } from "./hooks/usePosts"
import { MyButton } from "./UI/button/MyButton"
import { MyModal } from "./UI/modal/MyModal"
import axios from "axios"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )
    setPosts(response.data)
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Add Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
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
