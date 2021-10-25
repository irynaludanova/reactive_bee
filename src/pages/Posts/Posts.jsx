import React, { useEffect, useRef, useState } from "react"
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
import { useObserver } from "../../hooks/useObserver"
import { MySelect } from "../../UI/select/MySelect"

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Quantity of elements"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: -1, name: "Show all posts" },
        ]}
      />
      {postError && (
        <h1>
          Oops...
          <br />
          Something went wrong...{postError}
        </h1>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Post List"
      />
      <div ref={lastElement} />
      {isPostsLoading && <MyLoader />}
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
