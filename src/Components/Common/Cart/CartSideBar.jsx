import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart } from '../../../Slices/CartSlice'
import { REMOVE_FROM_CART, UPDATE_CART } from '../../redux/actions/actions'
import { Link } from 'react-router-dom'
import { CartSideBarList } from './CartSideBarList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export const CartSideBar = ({closeCartSidebar}) => {

    const cart = useSelector (selectCart)
    const dispatch = useDispatch();




    const subTotal = cart.reduce((accumulator,shoe) =>  accumulator+ shoe.price*shoe.quantity , 0)

    const updateCartHandler = (product,newQuantity,updatedSize) => {

        const {id,name,price,size,available,images,gender,quantity,uniqueId,sizes} = product
    
        const newProduct = {...product,quantity:newQuantity,size:sizes[updatedSize]}
    
        dispatch(UPDATE_CART(newProduct))
      }


      const removeItem = (item) => {

        dispatch(REMOVE_FROM_CART(item))
      }


  return (
    <section id='cartSideBar' className='px-2'>

        <div className='flex justify-end p-2 items-center mt-2'>
          <FontAwesomeIcon icon={faArrowRightLong}  onClick={closeCartSidebar} className='text-xl cursor-pointer'/>
        </div>

        <div className='bg-black p-2 mt-2 flex cursor-pointer rounded-md'>
        <Link onClick={closeCartSidebar} 
        className='text-white text-center text-lg mx-auto w-full h-full block' to='/cart'> View Cart</Link>
        </div> 

        <div className='flex flex-col px-4'>

          {cart.map((product,index) => <CartSideBarList product={product} 
          closeCartSidebar ={closeCartSidebar} removeItem ={removeItem} updateCartHandler={updateCartHandler} 
          key={product.id}/>)}
        
        <div className='flex justify-end' >
          <p className='text-center text-lg  p-2'>Sub Total: ${subTotal}</p></div>

        </div>


      
          
    </section>
  )
}
