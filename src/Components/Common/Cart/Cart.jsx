import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartCard } from './CartCard'
import { REMOVE_FROM_CART } from '../../redux/actions/actions'
import './cart.css'
import { UPDATE_CART } from '../../redux/actions/actions'

export const Cart = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const Tax = 5; //Percent
  const shippingCost = 15;



  const subTotal = cart.reduce((accumulator,shoe) =>  accumulator+ shoe.price*shoe.quantity , 0)

  const orderTotal = shippingCost + subTotal*Tax/100 + subTotal


  const updateCartHandler = (product,newQuantity,updatedSize) => {

    const {id,name,price,size,available,images,gender,quantity,uniqueId,sizes} = product

    const newProduct = {...product,quantity:newQuantity,size:sizes[updatedSize]}

    
    dispatch(UPDATE_CART(newProduct))
  }
   
  const removeItem = (item) => {

    dispatch(REMOVE_FROM_CART(item))
  }

  return (

    
    <div className='2xl:container mx-auto pt-12'>
      <button onClick={() => console.log(cart)}>show Cart</button>
      <div className='flex flex-wrap'>
        <div className='flex-auto lg:basis-2/3 shadow-md'>
        <div className='flex justify-center text-center'>
        <div className="basis-2/5">
          <p className="text-xl">Product</p>
        
        </div>
        
        <div className="price basis-1/5">
          <p className="text-xl">Price</p>
        </div>
        <div className="basis-1/5">
        <p className="text-xl">Quantity</p>
        </div>
        <div className="total basis-1/5">
        <p className="text-xl">Total</p>
        </div>

      </div>
          {cart.map(product => <CartCard product={product} removeItem = {removeItem} 
          updateCartHandler = {updateCartHandler}
          />)}
          
        </div>
          <div className='flex-auto lg:basis-1/3 w-full p-4 px-8 shadow-md'>
            <p className='text-2xl'>Summary</p>
            <div className='h-px bg-black my-2'></div>
            <p>Estimate Shipping and Tax</p>
            <div className='h-px bg-black my-2'></div>

            <div className='flex justify-between'>
              <p>Sub Total:</p>
              <p>{subTotal} $</p>
            </div>
            <div className='flex justify-between mt-2'>
              <p>Tax:</p>
              <p>{subTotal*Tax/100} $</p>
            </div>

            <div className='flex justify-between mt-2'>
              <p>Shipping Cost:</p>
              <p>{shippingCost} $</p>
            </div>

            <div className='flex justify-between mt-2 text-2xl font-medium'>
              <p>Order Total:</p>
              <p>{orderTotal} $</p>
            </div>

            <div className='bg-slate-900 p-4 w-full text-white text-xl text-center mt-2'>
              Checkout
            </div>


          </div>
      </div>


    </div>
  )
}
