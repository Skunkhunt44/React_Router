import { useState } from 'react'
import AppCss from './App.module.css'
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <>
    <div className={AppCss.container}>
          <header className={AppCss.header}>
              <h1>
                <Link to='/'>#VANLIFE </Link>
              </h1>
              <nav>
                <ul>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>Vans</li>
                </ul>
              </nav>
          </header>
          <main className={AppCss.content}>
            <h1 className='font-[800] text-[32px]'>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement.
               Rent the perfect van to make your perfect road trip.</p>
               <button className={AppCss.btn}>Find your van</button>
          </main>
          <footer>
            <p>Ⓒ 2022 #VANLIFE</p>
          </footer>
    </div>
     
    </>
  )
}

export default App
