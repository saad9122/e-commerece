import {faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCartShopping, faCross, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import './navbar-mobile.css'

import heart from '../../../assets/icons/Heart.svg'
import cartIcon from '../../../assets/icons/Cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR_ALL_FILTERS, CLEAR_SORT } from '../../redux/actions/actions'
import { CartSideBar } from '../Cart/CartSideBar'
import { selectFavorite } from '../../../Slices/Men/MenSlice'

export const Navbar = () => {

  const cart = useSelector(state => state.cart);
  const [cartSideBar,setCartSideBar] = useState('close')
  const favorite = useSelector(selectFavorite)

  const dispatch = useDispatch();
  const [responsive,setResponsive] = useState(false);


  const closeCartSidebar = () => {
    setCartSideBar('close')
  }

   const handleToogle = () => {
    setResponsive(!responsive);
   }
   const toggle = responsive ? 'mobile' : 'pc';

   const cartQuantity = (myArray) => {
      let total = 0;
      for(let x=0; x<myArray.length; x++){
      total += myArray[x].quantity
      }
      return total
   }

   const clearSortAndFIlters = () => {
    dispatch(CLEAR_ALL_FILTERS())
    dispatch(CLEAR_SORT())
   }

  return (
    <section id='header' className='2xl:container mx-auto'>

      {/* ======================Cart SideBar ================== */}

        <div className={`cart-sidebar-container ${cartSideBar}`} >
              
              <div className={`cart-sidebar ${cartSideBar}`}>
              {/* <FontAwesomeIcon icon={faXmark}  className={`cart-sidebar-cencel ${cartSideBar}`} onClick={() => setCartSideBar('close')}/> */}
              <CartSideBar closeCartSidebar = {closeCartSidebar}/>
              </div>
        </div>

      {/*=========================== Navbar =======================*/}
      <div className='flex justify-between items-center all-navbar'>
            <p className='text-4xl font-bold antialiased]'>Exlusive</p>
            <div className={`navbar ${toggle}`}>
              <div className='flex items-center'>
                    <ul className='navbar-ul'>
                      <li onClick={clearSortAndFIlters}><Link to='/'>Home</Link></li>
                      <li onClick={clearSortAndFIlters}><Link to='/men'>Men </Link></li>
                      <li onClick={clearSortAndFIlters}><Link to='/women'>Women</Link></li>
                      <li onClick={clearSortAndFIlters}><Link to='/kids'>Kids</Link></li>
                    </ul>
              </div>
            </div>
                      
                <div className='flex items-center navbar-icons'>
                  <div className='cartIcon-container'>

                    <Link to='/favorite'><img src={heart} alt="icon" className='icons' onClick={clearSortAndFIlters}/></Link>
                    {favorite.length>0 && <p className='cart-quantity'>{favorite.length}</p>}
                    
                  </div>

                  <div className='cartIcon-container'>
                     <button onClick={() => setCartSideBar('open') }><img src={cartIcon} alt="icon" className='icons'/></button>
                     {cart.length>0 && <p className='cart-quantity'>{cartQuantity(cart)}</p>}

                  </div>
                  
                  {responsive ? <FontAwesomeIcon icon={faXmark} className= {`navbar-toggle ${toggle}`} onClick={handleToogle}/>
                  : <FontAwesomeIcon icon={faBars} className= {`navbar-toggle ${toggle}`} onClick={handleToogle}/>

                  }
                  
                </div>
        </div>

    </section>
  )
}
