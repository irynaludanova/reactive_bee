import React, { useEffect, useState } from "react"
import "./../../App.css"
import { PostFilter } from "./../../components/PostFilter/PostFilter"
import { PostForm } from "./../../components/PostForm/PostForm"
import { PostList } from "./../../components/PostList/PostList"
import { usePosts } from "./../../hooks/usePosts"
import { MyButton } from "./../../UI/button/MyButton"
import { MyModal } from "./../../UI/modal/MyModal"
import PostService from "./../../API/PostService"
import { MyLoader } from "./../../UI/loader/MyLoader"
import { useFetching } from "./../../hooks/useFetching"
import { getPageCount } from "./../../utils/pages"
import { MyPagination } from "./../../UI/pagination/MyPagination"

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const changePage = (page) => {
    setPage(page)
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
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
      {postError && (
        <h1>
          Oops...
          <br />
          Something went wrong...{postError}
        </h1>
      )}
      {isPostsLoading ? (
        <MyLoader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Post List"
        />
      )}
      <MyPagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        changePage={changePage}
      />
    </div>
  )
}

export default Posts
