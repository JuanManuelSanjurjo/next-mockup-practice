import React from 'react'
import PostCard from '@/components/PostCard'



async function fetchPosts(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = res.json()
  console.log(data)

  return data
}




async function Posts() {
  const posts = await fetchPosts()



  return (
    <div className='grid grid-cols-3 gap-4 p-20'>
      {posts.map( post => (
        <PostCard post= {post} key={post.id}/>
      ))}
    
    </div>
  )
}

export default Posts