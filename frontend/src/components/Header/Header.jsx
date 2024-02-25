import React from 'react'
import OlxLogo from '../../Assets/OlxLogo'
import SearchIcon from '../../Assets/SearchIcon'
import Arrow from '../../Assets/Arrow'
import SellButton  from '../../Assets/SellButton'
import SellButtonPlus from '../../Assets/SellButtonPlus'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className="headerParentDiv">
    <div className="headerChildDiv">
      <div className="brandName">
        <Link to={'/'}><OlxLogo></OlxLogo></Link>
      </div>

      <div className="placeSearch" style={{width:"800px",marginLeft:"50px"}}>
        <input type="text" 
        style={{width:"700px"}}
        placeholder="Search specific product..."
        // value={wordEntered}
        // onChange={handleFilter}
      />
      </div>
      <div className="productSearch">
        {/* <Search /> */}
      </div>
      
      <div className="language" >
      <Link to="/create">
        <div  className=' flex ' style={{marginLeft:"100px"}}>

      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" class="_1XmrCc"/>
        <span className='w-48' style={{fontFamily:"cursive"}}> Become a seller</span>
        
        </div>
     
      </Link>
      </div>
      <div className="loginPage">
        {
        // user ? (
        //   user.displayName
        // ) : (
        //   <Link to="/login">
        //     <span>Login</span>
        //   </Link>
        // )
        }
        <hr />
      </div>
      {
    //   user && (
    //     <span  className="logout-span">
    //       Logout
    //     </span>
    //   )
      }
      
      <Link to="/login">
    
      <div  className=' flex m-30' style={{marginLeft:"0px"}}>

      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" class="-dOa_b L_FVxe" width="24" height="24"/>
       <span className='w-48' style={{fontFamily:"cursive"}} > Login</span>
      
  </div>
        </Link>
    </div>
  </div>
  )
}

export default Header;