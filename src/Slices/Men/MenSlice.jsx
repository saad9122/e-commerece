import { menShoesData } from "../../data"
import { selectKidsShoes } from "../KidsSlics";



const initalState = menShoesData;
export const menShoesReducer = (menShoes = initalState , actions) => {

    switch(actions.type) {

        case 'addToFavorite' : menShoes.filter(ele => ele.id !== actions.payload.id)

        default:return menShoes
    }
}

export const selectMenShoes = state => state.menShoes;
export const selectWomenShoes = state => state.womenShoes;
export const selectFavorite = state => state.favorite
export const selectFilter = state => state.filter;
export const selectSort = state => state.sort;


export const selectFilteredShoes = (state,component) => {

    let selector = selectMenShoes(state)
    
    if(component === 'men'){

        const selector = selectMenShoes(state)
        
    } else if(component === 'women') {
        selector = selectWomenShoes(state)
    } else if(component === 'favorite'){
        selector = selectFavorite(state)
    } else if(component === 'kids'){
        selector = selectKidsShoes(state)
    }

    
    const filter = selectFilter(state);
    const sort = selectSort(state)
    let filteredShoes = selector;
    
    if(filter.price.length>0){
    const priceMin = filter.price[0];
    const priceMax = filter.price[1]

     filteredShoes =  selector.filter(shoe => shoe.price > priceMin && shoe.price < priceMax)

    } 
    if (filter.sizes.length>0) {

         filteredShoes = filteredShoes.filter(shoe => filter.sizes.every(size => shoe.sizes.includes(size)))   

    }
    if(filter.colors.length>0){
        filteredShoes = filteredShoes.filter(shoe => filter.colors.every(color => shoe.colors.includes(color)))
    }
    if(sort !== '') {

        switch(sort) {
            case 'lowToHigh': return filteredShoes = filteredShoes.slice().sort((a,b) => a.price - b.price)
            case 'highToLow': return filteredShoes = filteredShoes.slice().sort((a,b) => a.price - b.price).reverse()
            case 'newest'   : return filteredShoes = filteredShoes.slice().sort((a,b) => a.date - b.date) 
            case 'featured' : return filteredShoes = filteredShoes.slice().sort((a,b) => a.date - b.date).reverse() 
            default : return filteredShoes
        }
    }


    return filteredShoes

}


