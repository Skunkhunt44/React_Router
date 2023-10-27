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
import HostLayout from './components/HostLayout.jsx'
import VansHost from './Pages/Host/VansHost.jsx'
import HostVanDetail from './Pages/Host/HostVanDetail.jsx'
import HostVanPricing from './Pages/Host/HostVanPricing.jsx'
import HostVanPhotos from './Pages/Host/HostVanPhotos.jsx'
import HostVanInfo from './Pages/Host/HostVanInfo.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route  index element={<App/>} />   
          <Route path='about' element={<About/>} />                  
          <Route path='vans' element={<Vans/>} />                  
          <Route path='vans/:id' element={<VanDetail/>} />
          <Route path='/host' element={<HostLayout/>}>            
              <Route index element={<Dashboard/>} />                  
              <Route path='income' element={<Income/>} />                  
              <Route path='Reviews' element={<Reviews/>} />     
              <Route path='vans' element={<VansHost/>} />                  
              <Route path='vans/:id' element={<HostVanDetail/>}>
                  <Route index element={<HostVanInfo/>} /> 
                  <Route path='pricing' element={<HostVanPricing/>} /> 
                  <Route path='photos' element={<HostVanPhotos/>} /> 
              </Route>                  
          </Route>                  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
