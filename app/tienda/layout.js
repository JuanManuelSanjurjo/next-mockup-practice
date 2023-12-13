import React from 'react'

function Tiendalayout({children}) {
  return (
    <>
        <nav>
            <h3>Seccion tienda</h3>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
            </ul>
        </nav>
        {children}
    </>
  )
}

export default Tiendalayout