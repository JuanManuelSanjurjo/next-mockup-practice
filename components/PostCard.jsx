import React from 'react'

function PostCard({post}) {
  return (
    <div className='bg-slate-950 p-4 rounded-md'>
        <h1 className='font-bold text-2xl p-4'>{post.id} {post.title}</h1>
        <p className='font-thin text-slate-300'>{post.body}</p>
    </div>
  )
}

export default PostCard