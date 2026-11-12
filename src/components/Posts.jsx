import React, { useEffect, useState } from 'react'
import Post from './Post'

const Posts = () => {
    const [posts, setPosts] = useState([])

    const getData = async () => {
        const response = await fetch('https://dummyjson.com/posts')
        const data = await response.json()
        console.log(data.posts)
        setPosts(data.posts)
      }
    
      useEffect(() => {
        getData();
      }, [])
    
  return (
    <div>
      {/* how to not render multiple components in react */}

        {/* <div style={{border: "1px solid black"}}>
          <p>{posts[0]?.id}</p>
          <p>{posts[0]?.body}</p>
        </div>

        <div style={{border: "1px solid black"}}>
          <p>{posts[1]?.id}</p>
          <p>{posts[1]?.body}</p>
        </div> */}

        {/* how to render multiple components in react */}

        {
          posts.map((post)=> {
            return (
              <div style={{border: "1px solid black"}}>
                <p>{post?.id}</p>
                <p>{post?.body}</p>
              </div>
            //   <Post post={post} />
            )
          })
        }
    </div>
  )
}

export default Posts
