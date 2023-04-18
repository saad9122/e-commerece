import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { PopupCard } from '../../Dynamic/PopupCard';

export const CartSideBarList = ({product,closeCartSidebar,removeItem,updateCartHandler}) => {

    const [showCard,setShowCard] = useState(false)



    const {id,name,price,size,available,images,gender,quantity,uniqueId,sizes} = product;

    const selectedSizeIndex = sizes.indexOf(size)
    const total = quantity* price;
    
      const showCardHandler = () =>{
        setShowCard(!showCard)
        console.log('from CardHandler')
      }


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
                    onClick={showCardHandler}
                    />
                    {showCard && <PopupCard product={product} showCardHandler={showCardHandler} cardHandler={updateCartHandler}
                    text={'Update Card'} selectedSizeIndex={selectedSizeIndex} selectedQuantity={product.quantity}
                    />}
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => removeItem(product)} 
                    className="cart-product-icons hover:text-red-600"/>
                </div>

            </div>

            

        </div>)
}
