import React from 'react'

const Post = ({post}) => {
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.body}</p>
      <p>{post.title}</p>
      <p>{post.views}</p>
    </div>
  )
}

export default Post
