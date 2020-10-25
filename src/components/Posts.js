import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

function Posts({ posts }) {
  if(!posts.length) return <p className="text-center"></p>
  return posts.map(post=><Post key={post.id} post={post} />)
}

const mapStateToProps = state => state.posts
export default connect(mapStateToProps, null)(Posts)
