
const initialState = {
    price :[],
    sizes :[],
    colors:[],
}


export const filterReducer = (filter = initialState, actions) => {
    switch(actions.type){
        case "filters/addPriceFilter"    : return {...filter,price:actions.payload}
        case 'filters/removePriceFilter' : return {...filter,price:[]}
        case 'filters/addSizeFilter'     : return {...filter,sizes:[...filter.sizes,actions.payload]} 
        case 'filters/removeSizeFilter'  : return {...filter,sizes:filter.sizes.filter(size => size !== actions.payload)}
        case 'filters/addColorFilter'    : return {...filter,colors:[...filter.colors,actions.payload]}  
        case 'filters/removeColorFilter' : return {...filter,colors:filter.colors.filter(color => color !== actions.payload)}
        case 'filters/clearAllFilters'   : return {price:[],sizes:[],colors:[]}
        default: return filter   
    }
}

export const selectFilter = state => state.filter;

