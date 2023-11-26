import { useState } from "react";
import './shoescard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { PopupCard } from "../../Dynamic/PopupCard";
import heartIcon from '../../../assets/icons/Heart.svg'
export const ShoesCard = (props) => {

  const [showCard,setShowCard] = useState(false);


  const showCardHandler = () => {
     setShowCard(!showCard)
  }

  const {shoe,addToBagHandler} = props

  let removeBtn = shoe.gender.toLowerCase();
  
  // const handleView = () => {
  //   navigate('./view' ,{state:{shoe}})

  // }

  const {id,name,price,sizes,available,images,gender} = shoe

  return (
    <div className='shoecard-overlay py-4 px-2'>
        <div className="shoe-card">   
          <div className="card-img">
              <div className="img-container">
                  <img  src={images[1]} alt="Shoe" className="card-img-fir"/>
                  <div className="addtobag-btn">
                      <div className="flex space-x-2">
                        <button onClick={() => setShowCard(!showCard)}>
                        <FontAwesomeIcon icon={faShoppingBag}  className="addtobag-icon"/>
                      </button>

                      <button>
                        <Link to='/view' state={shoe}>
                          <FontAwesomeIcon icon={faEye}  className="addtobag-icon"/>
                        </Link>
                      </button>
                    </div>
                  </div>

              </div>
            </div>
          <div className="flex justify-between items-center py-6">
            <div>
              <p className="text-xl text-slate-800">{name}</p>
              <p className="text-slate-600">{gender}'s Shoes</p>
              <p className="text-lg text-slate-900">${price}</p>
            </div>
          </div>
          {/* <button onClick={() => console.log(RemoveBtn)}>show Gender</button> */}
          {/* {(removeBtn === 'men' || removeBtn === 'women' || removeBtn === 'kids') && <div>Remove From WishtList</div>} */}
          
        </div>
        {showCard && <PopupCard product={shoe} showCardHandler={showCardHandler} cardHandler={addToBagHandler}
    text={'Add to Bag'} selectedSizeIndex={0} selectedQuantity={1} 
    />}
    </div>
  )
}
