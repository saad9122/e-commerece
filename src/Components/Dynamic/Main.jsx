import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { faArrowRight, faFilter, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ShoesCard } from '../Common/ShoesCard/ShoesCard'
import { ADD_SORT_VALUE, ADD_TO_CART,ADD_TO_FAVORITE } from '../redux/actions/actions'
import { REMOVE_FROM_CART } from '../redux/actions/actions'
import { Bars } from '../Pages/Men/Bars'
import { Filters } from '../Filters/Filters'
import { selectFilter } from '../Filters/FilterSlice'



export const Main = (props) => {

    const shoesCat = props.shoesCat

  const [girdCols,setGridCols] = useState('three')
  const [sideBar,setSideBar] = useState('close')

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter)
  
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

  const openSideBar = () => {
    setSideBar('open')
  }

  const closeSideBar = () => {
    setSideBar('close')
  }

  const availableFilter = () => {

    if(filter.sizes.length === 0 && filter.colors.length === 0 && filter.price.length === 0) return false
    else return true
  }

  const handleSort = (e) => {
    const value = e.target.value

    dispatch(ADD_SORT_VALUE(value))
  }


  return (
    <section id='men' className='px-4 md:px-8 lg:px-12'>

      {/* =====================Filters SideBar ====================== */}

      <div className='filter-and-sort'>

      <div className={`sidebar-container ${sideBar}`} >
        <div className={`sidebar ${sideBar}`}>
        <FontAwesomeIcon icon={faXmark}  className='sidebar-cencel' onClick={closeSideBar}/>
          <Filters shoesCat = {shoesCat}/>
        </div>
      </div>

      {/* =====================Cart SideBar ====================== */}

     {/* =====================Filters and Grid column ====================== */}

      <div className='flex justify-between' >
        <div className='flex items-center space-x-2 hover:cursor-pointer' onClick={openSideBar}>
          <FontAwesomeIcon icon={faFilter}  className='text-xl' onClick={openSideBar}/>
          <p className='text-xl'>Filters</p>
        </div>
      
          <Bars setGridCols ={setGridCols} />

      </div>

    
      {/* =====================Applied Filters List ====================== */}

      {availableFilter() &&  <div className='space-x-2 py-2'>
        
        <p className='show-filter'>Applied Filters <FontAwesomeIcon icon={faArrowRight} /></p>
        {filter.price.length >0 && <p className='show-filter' >Range: {filter.price[0]} to {filter.price[1]}</p>}  
        {filter.sizes.map((size,index) => <p className='show-filter' key={index}>Size:{size}</p>)}
        {filter.colors.map((color,index) => <p className='show-filter' key={index}>{color}</p>)}
        
      </div>
      }

      </div>

      {/* =====================Sort DropDown ====================== */}

      <div className='flex justify-start py-2'>
        <select name="sortShoes" onChange={handleSort}>
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="featured">Featured</option>
        </select>
      </div>

      {shoesCat.length === 0 ? <p className='text-xl text-center'>No Products to Show</p> : null} 

       {/* =====================Shoes Card ====================== */}

      <div> 
        <div className={`shoecard-wrapper-${girdCols}`}>

          {shoesCat.map(shoe => <ShoesCard shoe ={shoe} key={shoe.id} addToBagHandler={addToBagHandler} 
          ADD_TO_FAVORITE ={ADD_TO_FAVORITE} REMOVE_FROM_CART={REMOVE_FROM_CART}
          />)}

        </div>  
      </div>
    </section>
  )
}
