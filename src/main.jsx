import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import { BrowserRouter,Routes , Route,Link} from 'react-router-dom'
import './index.css'
import Vans from './Vans.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>} />   
          <Route path='/about' element={<About/>} />                  
          <Route path='/vans' element={<Vans/>} />                  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
