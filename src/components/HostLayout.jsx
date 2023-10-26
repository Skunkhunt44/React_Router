import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'



function HostLink() {

const activeStyle={
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: '#161616'
}

  return (
    <div className='w-[548px] bg-[#FFF7ED] m-auto p-5'>
        <nav>
            <ul className='font-[500] text-[18px] text-[#4D4D4D]'>
                <li>
                  <NavLink end style={({isActive})=> isActive ? activeStyle : null}  to='/host'>Dashboard</NavLink >
                </li>               
                <li>
                  <NavLink end style={({isActive})=> isActive ? activeStyle : null}  to='/host/vans'>Vans</NavLink >
                  </li>
                <li>
                  <NavLink style={({isActive})=> isActive ? activeStyle   : null}  to='/host/income'>Income</NavLink >
                </li>
                <li>
                  <NavLink style={({isActive})=> isActive ? activeStyle : null}  to='/host/reviews'>Reviews</NavLink >
                </li>
            </ul>

        </nav>
        <Outlet/>

    </div>
  )
}

export default HostLink