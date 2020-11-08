
import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div>
    <h1>Yu Ohno</h1>
    <div style={{ marginBottom: 20 }}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/works">
            <a>Works</a>
          </Link>
    </div>
  </div>
)


export default Header