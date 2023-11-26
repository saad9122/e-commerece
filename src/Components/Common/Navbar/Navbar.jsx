import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
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
import { AnimatePresence,motion } from 'framer-motion'

export const Navbar = () => {

  const cart = useSelector(state => state.cart);
  const [cartSideBar,setCartSideBar] = useState('close')
  const favorite = useSelector(selectFavorite)

  const dispatch = useDispatch();
  const [responsive,setResponsive] = useState(false);


  const closeCartSidebar = () => {
    document.body.style.overflow = "auto"
    setCartSideBar('close')
  }


  const openCartSidebar = () => {
    document.body.style.overflow = "hidden"
    setCartSideBar("open")
  }

  const closeNavbar = () => {

    document.body.style.overflow = 'auto'

    setResponsive(false)
  }

  const openNavbar = () => {

    document.body.style.overflow = 'hidden'

    setResponsive(true)

  }

  const scrollToTop = () => {
    window.scrollTo(0,0)
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
    closeNavbar();
   }

   const handleDocumentClick = (e) => {

    if(!e.target.closest(".cart-sidebar")){
      closeCartSidebar()
    }

   }

  return (
    <section id='header' className='2xl:container mx-auto'>

      {/* ======================Cart SideBar ================== */}

        
        <AnimatePresence>

              {cartSideBar === "open" &&
              <div className={`cart-sidebar-container ${cartSideBar}`} onClick={handleDocumentClick} >
              <motion.div className={`cart-sidebar ${cartSideBar}`}
              initial = {{x:350}}
              transition={{type:"spring",damping:25,stiffness:100}}
              animate = {{x : 0}}
              exit={{x:0}}
              >
              {/* <FontAwesomeIcon icon={faXmark}  className={`cart-sidebar-cencel ${cartSideBar}`} onClick={() => setCartSideBar('close')}/> */}
              <CartSideBar closeCartSidebar = {closeCartSidebar}/>
              </motion.div> 
              </div>     
              }

        </AnimatePresence>

        


        

      {/*=========================== Navbar =======================*/}
      <div className='flex justify-between items-center all-navbar'>
            <p className='text-4xl font-bold antialiased]'>Exlusive</p>
            <div className={`navbar ${toggle}`}>
              <div className='flex items-center'>
                    <ul className={`navbar-ul ${toggle}`}>
                      {/* <li onClick={clearSortAndFIlters}><Link to='/'>Home</Link></li> */}
                      <li onClick={clearSortAndFIlters}><Link to='/' onClick ={scrollToTop} >Men </Link></li>
                      <li onClick={clearSortAndFIlters}><Link to='/women' onClick ={scrollToTop}>Women</Link></li>
                      <li onClick={clearSortAndFIlters}><Link to='/kids' onClick ={scrollToTop} >Kids</Link></li>
                    </ul>
              </div>
            </div>
                      
                <div className='flex items-center navbar-icons'>
                  <div className='cartIcon-container'>

                    <Link to='/favorite'><img src={heart} alt="icon" className='icons' onClick={clearSortAndFIlters}/></Link>
                    {favorite.length>0 && <p className='cart-quantity'>{favorite.length}</p>}
                    
                  </div>

                  <div className='cartIcon-container'>
                     <button onClick={openCartSidebar}><img src={cartIcon} alt="icon" className='icons'/></button>
                     {cart.length>0 && <p className='cart-quantity'>{cartQuantity(cart)}</p>}

                  </div>
                  
                  {responsive ? <FontAwesomeIcon icon={faXmark} className= {`navbar-toggle ${toggle}`} onClick={closeNavbar}/>
                  : <FontAwesomeIcon icon={faBars} className= {`navbar-toggle ${toggle}`} onClick={openNavbar}/>

                  }
                  
                </div>
        </div>

    </section>
  )
}
