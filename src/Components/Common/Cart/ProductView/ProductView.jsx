import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { ADD_TO_CART, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../../../redux/actions/actions';

import './productview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { selectFavorite } from '../../../../Slices/Men/MenSlice';
import { useNotificationHandler } from '../../../../context/NotificationContext';
import { notificationTypes } from '../../../Notification/notificationTypes';

// import { Magnifier } from "react-image-magnify";

export const ProductView = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(1);
  const [selectedSize,setSelectedSize] = useState(0);

  const {handleShowNotification,handleNotificationInfo} = useNotificationHandler()

  const wishlist = useSelector(selectFavorite)


  const myshoe = location.state
  const {id,name,price,sizes,available,images,gender} = myshoe

  const isInWishLIst = wishlist.some(favShoe => favShoe.id === id)

  
  const [currentImg, setCurrentImg] = useState(images[1])

  const decreaseQuantity = () => {
    quantity === 1 ? setQuantity(quantity) : setQuantity(quantity-1)
}

  const addToBagHandler = (shoe,quantity,selectedSize) => {

    const {id,name,price,sizes,available,images,gender} = shoe    

    const product = {
      id:id,
      name:name,
      price:price,
      size:sizes[selectedSize],
      available:available[selectedSize],
      images:images,
      gender:gender,
      quantity:quantity,
      uniqueId: id+sizes[selectedSize],
      sizes:sizes,
      sizeIndex: selectedSize,
      
    }
    
    dispatch(ADD_TO_CART(product))
  } 
  const addtoBagBtn = () => {

    handleNotificationInfo(notificationTypes.added)
    handleShowNotification()
    

    addToBagHandler(myshoe,quantity,selectedSize)
   } 
  
  return (
    <div className='pt-14 px-2 md:px-8'>

      <div className='flex flex-wrap'>
        <div className='basis-full md:basis-1/2 flex flex-col p-4'>
            <div className='flex justify-center'>
              <img src={currentImg} alt='Shoes' className='display-view-img' />
            </div>
            <div className='p-2 img-container'>
              <img src={images[0]} alt='Shoe' onClick={() => setCurrentImg(images[0])} className='view-img'/>
              <img src={images[1]} alt='Shoe' onClick={() => setCurrentImg(images[1])} className='view-img'/>
              <img src={images[2]} alt='Shoe' onClick={() => setCurrentImg(images[2])} className='view-img'/>
              <img src={images[3]} alt='Shoe' onClick={() => setCurrentImg(images[3])} className='view-img'/>
            </div>       
        </div>
        <div className='basis-full md:basis-1/2 p-2 md:p-4 space-y-6 flex flex-col items-center md:items-start'>
          <h1 className='text-4xl'>{name}</h1>
          <p className='text-2xl'>Price: ${price}</p>
          <p className='text-xl'> Size:{sizes[selectedSize]}</p>

          <div className="size-btns space-x-3">
                    {sizes.map((size,index) => {
                        return <button className={`p-3 border ${selectedSize === index ? 'selected-size-btn' : '' }`}
                        onClick={() => setSelectedSize(index)} key={index}>{size}</button>
                    })}
          </div>
          
          <div>
          <div className="quantity-btns flex items-center space-x-4">
  
                    <button><FontAwesomeIcon icon={faMinus}  onClick = {decreaseQuantity}
                    className="quantity-view-btn"
                    /></button>
                   <div className='flex items-centers justify-center text-xl w-8'><p>{quantity}</p></div> 
                    <button><FontAwesomeIcon icon ={faPlus} onClick = {() => setQuantity(quantity+1)}
                    className="quantity-view-btn"
                    /></button>
                </div>
          </div>
          <div className='text-lg w-full md:w-3/5'>
          <button onClick={addtoBagBtn} className="addtobag-view-btn"><span>Add to Bag</span>         
          </button>

          </div>
          
          <div className='text-lg w-full md:w-3/5'>

            { isInWishLIst ? 

          <button className='wishlist-btn' onClick={() => dispatch(REMOVE_FROM_FAVORITE(myshoe))}>
          <FontAwesomeIcon  icon={faHeartBroken}/> Remove from WishList</button>
            
            
            :
              <button className='wishlist-btn' onClick={() => dispatch(ADD_TO_FAVORITE(myshoe))}>
              <FontAwesomeIcon  icon={faHeart}/> Add to WishList</button>

            }
               
          </div>
          
        </div>
      </div>
    </div>
  )
}
