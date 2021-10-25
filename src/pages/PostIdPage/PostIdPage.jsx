import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useFetching } from "../../hooks/useFetching"
import PostService from "../../API/PostService"
import { MyLoader } from "../../UI/loader/MyLoader"
const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  useEffect(() => {
    fetchPostById(params.id)
  }, [])
  console.log(params)
  console.log(post.title)
  return (
    <div>
      <h1>Post number {params.id}</h1>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          {post.id}.{post.title}
        </div>
      )}
    </div>
  )
}

export default PostIdPage
