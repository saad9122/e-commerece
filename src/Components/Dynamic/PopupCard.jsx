import { faMinus, faPlus,faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNotificationHandler } from '../../context/NotificationContext';
import { notificationTypes } from '../Notification/notificationTypes';


export const PopupCard =
 ({product,showCardHandler,cardHandler,text,selectedSizeIndex,selectedQuantity}) => {



    const [quantity,setQuantity] = useState(selectedQuantity);
    const [selectedSize,setSelectedSize] = useState(selectedSizeIndex);

    const {handleShowNotification,handleNotificationInfo} = useNotificationHandler()
    

    const {id,name,price,sizes,available,images,gender} = product

    const decreaseQuantity = () => {
        quantity === 1 ? setQuantity(quantity) : setQuantity(quantity-1)
    }
   const addtoBagBtn = () => {
    cardHandler(product,quantity,selectedSize)

    text === "Update Card" ? handleNotificationInfo(notificationTypes.updated) : handleNotificationInfo(notificationTypes.added)

    handleShowNotification()
    showCardHandler()
   }    

   const handleSizeBtn = (index) => {

    setSelectedSize(index) 
 
   }
  return (
    <div className='addtobag-overlay flex justify-center items-center'>
        <div className='addtobag-card space-y-2'>
            <button className='addtobag-cencel bg-red-700' 
            onClick={showCardHandler}><FontAwesomeIcon icon={faXmark} /></button>
                <div className='space-y-2'>
                        <p className="text-3xl">{name}</p>
                        <p>${price}</p>
                        <p>{gender}'s Shoes</p>
                        <p>size:{sizes[selectedSize]}</p>
                </div>
            <div className="size-btns flex flex-wrap gap-2">
                    {sizes.map((size,index) => {
                            return <button onClick={() => handleSizeBtn(index)} className={`p-3 border ${selectedSize === index ? 'selected-size-btn' : '' }`} 
                            id={`size${size}`}   value = {index} key={index}>
                            {size}</button>
                    })}
                </div>

            <div className='flex'>
                <div className="quantity-btns basis-1/2 flex items-center space-x-4">
                    <button><FontAwesomeIcon icon={faMinus}  onClick = {decreaseQuantity}
                    className="quantity-btn"
                    /></button>
                   <div className='flex items-centers'><p>{quantity}</p></div> 
                    <button><FontAwesomeIcon icon ={faPlus} onClick = {() => setQuantity(quantity+1)}
                    className="quantity-btn"
                    /></button>
                </div>
                <div className='basis-1/2 justify-self-end items-center'>
                    <button onClick={addtoBagBtn} className="addtobag-card-btn"><span>{text}</span>         
                    </button>
                </div>
            </div>          
        </div>
    </div>
  )
}
