import Link from 'next/link'
import React from 'react'


function Nav() {
  return (
    <nav className=' bg-slate-900 py-4 px-8 text-2xl uppercase flex justify-between '>
        <Link href={"/"}> 
          <h1>NextJS</h1>
          </Link>
        <ul className='flex gap-4'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/posts"}>posts</Link>
            <Link href={"/tienda"}>Tienda</Link>
        </ul>

    </nav>
  )
}

export default Nav