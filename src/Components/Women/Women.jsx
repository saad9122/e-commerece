import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredWomenShoes } from '../../Slices/womenSlice'
import { Main } from '../Dynamic/Main'
import { selectFilteredShoes } from '../../Slices/Men/MenSlice'

export const Women = () => {

    const womenShoes = useSelector((state) => selectFilteredShoes(state,'women'))


  return (
    <Main shoesCat = {womenShoes} />
  )
}       
