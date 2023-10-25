import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <header>
              <h1>
                <Link to='/'>#VANLIFE </Link>
              </h1>
              <nav>
                <ul>
                  <li>
                  <Link to='/host'>Host</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>
                    <Link to='/vans'>Vans</Link>
                    </li>
                </ul>
              </nav>
        </header>
    </div>
  )
}

export default Header