import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
   <div className="navbar">
   <div className="logo"><h2>
   ATGWORLD</h2>
   </div>
   <div className="search">
   <SearchIcon className='icon'/>
   <input placeholder="type something" type="text" />
   
   </div>
   <div className="account">
   <h4>Create Acount.<span> Its Free</span></h4>
   </div>
   </div>
  )
}

export default Navbar
