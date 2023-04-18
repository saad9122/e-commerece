import React, {useState} from 'react'
import './filters.css'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COLOR_FILTER, ADD_SIZE_FILTER, PRICE_ADD_FILTER, REMOVE_COLOR_FILTER, REMOVE_PRICE_FILTER, REMOVE_SIZE_FILTER } from '../redux/actions/actions';
import { totalPrices} from '../../data';
import { totalmenShoesColors,totalMenSizes } from '../../data';
import { totalWomenColors,totalWomenSizes } from '../../womendata';
import { selectFavorite } from '../../Slices/Men/MenSlice';
import { totalKidsColors, totalKidsSizes } from '../../kidsShoesData';

export const Filters = ({shoesCat}) => {

    let gender = 'men'
    if(shoesCat.length >0){

        gender = shoesCat[0].gender.toLowerCase()
    }

    
let totalColors = []
let totalSizes = []

   if(gender === 'men'){
    totalColors = totalmenShoesColors;
    totalSizes = totalMenSizes;
   } else if(gender === 'women'){
    totalColors = totalWomenColors
    totalSizes = totalWomenSizes
   } else if(gender === 'kids'){
    totalColors = totalKidsColors
    totalSizes = totalKidsSizes
   }else {
    totalColors = totalmenShoesColors.concat(totalWomenColors)
    totalSizes = totalMenSizes.concat(totalWomenSizes)
   }

    const dispatch = useDispatch();


    const [priceState, setPriceState] = useState({
        price0: false,
        price1: false,
        price2: false,
        price3: false,
        price4: false,
      });

    const handleCheck = (e) => {
        setPriceState({
            price0: e.target.id === "price0" ? e.target.checked : false,
            price1: e.target.id === "price1" ? e.target.checked : false,
            price2: e.target.id === "price2" ? e.target.checked : false,
            price3: e.target.id === "price3" ? e.target.checked : false,
            price4: e.target.id === "price4" ? e.target.checked : false,
          });

          if(e.target.checked === true){

           const priceArray = e.target.value.split(",")
           dispatch(PRICE_ADD_FILTER(priceArray))

          } else {
            dispatch(REMOVE_PRICE_FILTER())
          }
        };

    const handleSizeCheck = (e) => {

        const size = parseInt(e.target.value)
        if(e.target.checked) {
                   
            dispatch(ADD_SIZE_FILTER(size))

        } else {
            dispatch(REMOVE_SIZE_FILTER(size))
        }
    }
    
    const handleColorCheck = (e) => {

        if(e.target.checked) {
                   
            dispatch(ADD_COLOR_FILTER(e.target.value))
            console.log(e.target.value)

        } else {
            dispatch(REMOVE_COLOR_FILTER(e.target.value))
        }
        
    }
    
  return (
    <section id='filters' className='overflow-scroll'>
        {/* <button onClick={() => console.log(gender)}>show Filter</button> */}
        <div className='bg-black py-4 filters-heading'>
            <h1 className='text-2xl text-white text-center'>Filters</h1>
        </div>
        <div className='px-4 mt-2'>
            <div>
                <div className='bg-gray-900 py-2 rounded-sm'>
                     <h1 className='text-xl text-gray-100 text-center'>Shop By Price</h1>
                </div>

                <ul className='space-y-2 p-4'>

                    {totalPrices.map((price,index) => <li key={index}><input  type='checkbox' value={price} 
                    className='filter-checkbox' id={`price${index}`} checked={priceState[`price${index}`]} 
                    onChange={handleCheck} />

                    <label htmlFor={`price${index}`} className='checkbox-label'> ${price[0]}$ to ${price[1]}$ </label>
                    </li>
                    )}
                </ul>
            </div>

            <div>
                 <div className='bg-gray-900 py-2 rounded-sm'>
                     <h1 className='text-xl text-gray-100 text-center'>Shop By Size</h1>
                </div>
                <ul className='space-y-2 p-4'>
                    {totalSizes.map((size,index) => <li key={index}>
                    <input type='checkbox' value={size} className='filter-checkbox' onClick={handleSizeCheck} 
                    id={`size${size}`}/> 

                    <label htmlFor={`size${size}`} className='checkbox-label'> {size}</label>
                    
                    </li>

                    )}
                </ul>
            </div>
            <div>
                <div className='bg-gray-900 py-2 rounded-sm'>
                     <h1 className='text-xl text-gray-100 text-center'>Shop By Colors</h1>
                </div>
                <ul className='space-y-2 p-4'>

                    {totalColors.map((color,index) => <li key={index} >
                    <input type='checkbox' value={`${color.toLowerCase()}`} id={`${color}`} 
                    className='filter-checkbox' onClick={handleColorCheck}/> 

                    <label htmlFor={`${color}`} className='checkbox-label'> {color}</label>
                    </li>
                    )}

                </ul>
            </div>
        </div>

    </section>
  )
}
