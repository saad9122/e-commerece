import './men.css'
import { selectFilteredShoes } from '../../../Slices/Men/MenSlice'
import { Main } from '../../Dynamic/Main'
import { useSelector } from 'react-redux'


export const Men = () => {


  const menShoes = useSelector((state) => selectFilteredShoes(state,'men'))

  return (

    <Main shoesCat = {menShoes} />
    
  )
}
