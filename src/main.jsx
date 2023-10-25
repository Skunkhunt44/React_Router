import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import About from './Pages/About.jsx'
import { BrowserRouter,Routes , Route,Link} from 'react-router-dom'
import './index.css'
import Vans from './Pages/Vans/Vans.jsx'
import VanDetail from './Pages/Vans/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import Income from './Pages/Host/Income.jsx'
import Dashboard from './Pages/Host/Dashboard.jsx'
import Reviews from './Pages/Host/Reviews.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<App/>} />   
          <Route path='/about' element={<About/>} />                  
          <Route path='/vans' element={<Vans/>} />                  
          <Route path='/vans/:id' element={<VanDetail/>} />
          <Route path='/host' element={<Dashboard/>}>
              <Route path='/host/income' element={<Income/>} />                  
              <Route path='/host/Reviews' element={<Reviews/>} />     
          </Route>                  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
