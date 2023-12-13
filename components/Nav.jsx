import Link from 'next/link'
import React from 'react'


function Nav() {
  return (
    <nav>
        <ul style={{display: "flex", gap: "5px"}}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/tienda"}>Tienda</Link>
        </ul>

    </nav>
  )
}

export default Nav