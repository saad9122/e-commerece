import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { PopupCard } from '../../Dynamic/PopupCard'
import { useNotificationHandler } from '../../../context/NotificationContext'
import { notificationTypes } from '../../Notification/notificationTypes'

export const CartCard = ({product,removeItem,updateCartHandler}) => {


    const {handleShowNotification,handleNotificationInfo} = useNotificationHandler()

    const {id,name,price,size,available,images,gender,quantity,uniqueId,sizes} = product
    const selectedSizeIndex = sizes.indexOf(size)

    const total = price * quantity;
    const [showCard,setShowCard] = useState(false)

    const showCardHandler = () =>{
      setShowCard(!showCard)
    }
    const handleRemoveItem = () => {
      handleNotificationInfo(notificationTypes.deleted)
      handleShowNotification()
       removeItem(product)
    }
  return (
    <div className='p-4'>

        <div className='flex justify-center items-center'> 
        <div className="product flex basis-2/5">
            <img src={images[1]} alt="" />
          <div className='px-4 space-y-2'>
              <p className=" md:text-xl">{name}</p>
              <p>size:{size}</p>
            <div className='text-lg space-x-2'>
              <FontAwesomeIcon icon={faEdit} className="cart-product-icons hover:text-blue-600" 
              onClick={() => setShowCard(!showCard)}
              />
              <FontAwesomeIcon icon={faTrashCan} onClick={handleRemoveItem} 
              className="cart-product-icons hover:text-red-600"/>
            </div>
          </div>
        </div>
          <div className="price basis-1/5">
            <p className="text-center ">${price}</p>
          </div>
          <div className="flex items-center justify-center space-x-3 basis-1/5">
              <p className='p-2'>{quantity}</p>
          </div>
          <div className="total basis-1/5">
            <p className='text-center'>${total}</p>
          </div>
        </div>
    
    {showCard && <PopupCard product={product} showCardHandler={showCardHandler} cardHandler={updateCartHandler}
    text={'Update Card'} selectedSizeIndex={selectedSizeIndex} selectedQuantity={product.quantity}
    />}

    </div>
  )
}
