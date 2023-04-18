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
    <section id='cartSideBar'>

        <div className='flex justify-end p-2 items-center mt-2'>
          <FontAwesomeIcon icon={faArrowRightLong}  onClick={closeCartSidebar} className='text-xl cursor-pointer'/>
        </div>

        <div className='bg-slate-900 py-2 mt-2 flex cursor-pointer'>
        <Link onClick={closeCartSidebar} 
        className='text-white text-center text-lg mx-auto w-full h-full block' to='/cart'> View Cart</Link>
        </div> 

        <div className='flex flex-col px-4'>

          {cart.map((product,index) => <CartSideBarList product={product} 
          closeCartSidebar ={closeCartSidebar} removeItem ={removeItem} updateCartHandler={updateCartHandler} 
          key={product.id}/>)}
        
        {/* {cart.map((product) => {

        const {id,name,price,size,available,images,gender,quantity,uniqueId,sizes} = product;

        const selectedSizeIndex = sizes.indexOf(size)
        const total = quantity* price;

        return (
        
        <div className='flex items-center gap-4' key={product.id}>

            <div className='basis-1/2 px-2 md:px-8'>
                <Link to='/view' state={product} className='cursor-pointer' onClick={closeCartSidebar}>
                 <img src={images[1]} alt="Shoe" /></Link>
            </div>
            <div className='basis-1/2'>

                <p className='text-xl md:text-2xl'>{name}</p>
                <p className='md:text-lg'> Size:{size}</p>
                <p>Price: {price}$</p>
                <p>Quantity: {quantity}</p>
                <p>Total: ${total}</p>
                <div className='text-lg space-x-2'>
                    <FontAwesomeIcon icon={faEdit} className="cart-product-icons hover:text-blue-600" 
                    onClick={() => setShowCard(!showCard)}
                    />
                    {showCard && <PopupCard product={product} showCardHandler={showCardHandler} cardHandler={updateCartHandler}
                    text={'Update Card'} selectedSizeIndex={selectedSizeIndex} selectedQuantity={product.quantity}
                    />}
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => removeItem(product)} 
                    className="cart-product-icons hover:text-red-600"/>
                </div>

            </div>

            

        </div>)
        })} */}

        <div className='flex justify-end' >
        <p className='text-center text-lg  p-2'>Sub Total: ${subTotal}</p></div>

 
        

        </div>


      
          
    </section>
  )
}
