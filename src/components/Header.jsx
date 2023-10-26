import React from 'react'
import { NavLink,Link} from 'react-router-dom'


function Header() {
  return (
    <div>
        <header>
              <h1>
                <Link  to='/'>#VANLIFE </Link>
              </h1>
              <nav>
                <ul>
                  <li>
                  <NavLink   className={({isActive})=> isActive ? 'active-link': null} to='/host'>Host</NavLink>
                  </li>
                  <li>
                    <NavLink className={({isActive})=> isActive?'active-link':null} to='/about'>About</NavLink>
                  </li>
                  <li>
                    <NavLink className={({isActive})=> isActive?'active-link':null} to='/vans'>Vans</NavLink>
                    </li>
                </ul>
              </nav>
        </header>
    </div>
  )
}

export default Header