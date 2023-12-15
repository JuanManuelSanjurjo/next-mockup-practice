import Link from 'next/link'
import React from 'react'

export const metadata = {
  title : "Tienda"
}

function Tiendalayout({children}) {
  return (
    <>
        <nav>
            <h3>Seccion tienda</h3>
            <ul>
                <Link href={"/tienda/botines"}>Botines</Link>
                <Link href={"/"}>Home</Link>
            </ul>
        </nav>
        {children}
    </>
  )
}

export default Tiendalayout