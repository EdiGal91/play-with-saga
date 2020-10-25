import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../store/actions/posts'

function PostForm({createPost}) {
  const [title, setTitle] = useState('')
  
  const submitNewPost = (event) => {
    event.preventDefault()
    const post = {title, id: Date.now()}
    createPost(post)
    setTitle('')
  }
  return (
    <form onSubmit={submitNewPost}>
      <div className="form-group">
        <label htmlFor="title">Post Title</label>
        <input value={title} onChange={event=>setTitle(event.target.value)} id="title" className="form-control"/>
      </div>
      <button className="btn btn-success">Create</button>
    </form>
  )
}

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm)
