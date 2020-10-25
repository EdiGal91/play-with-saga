import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../store/actions/posts'
import Post from './Post'

function FetchedPosts() {
  const dispatch =  useDispatch()
  
  const posts = useSelector(state => state.posts.fetchedPosts)
  const fetching = useSelector(state => state.posts.fetching)

  const loadPosts = () => {
    dispatch(fetchPost())
  }

  if(fetching) return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
  if(!posts.length) return <button onClick={loadPosts} className="btn btn-primary">Fetch</button>
  return posts.map(post=><Post key={post.id} post={post} />)
}

export default FetchedPosts
