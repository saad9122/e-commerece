export const ADD_TO_CART = (product) => {
    return {
        type:'addToCart',
        payload:product
    }

}
export const REMOVE_FROM_CART = (product) => {
    return {
        type:'removeFromCart',
        payload:product
    }
}

export const UPDATE_CART = (product) => {
    return {
        type:'cart/updateCart',
        payload:product
    }
}

export const ADD_TO_FAVORITE = (product) => {

    return {
        type: 'addToFavorite',
        payload: product
    }

}
export const REMOVE_FROM_FAVORITE = (product) => {

    return {
        type: 'removeFromFavorite',
        payload: product
    }

}

export const PRICE_ADD_FILTER = (filter) => {

    return {
        type: 'filters/addPriceFilter',
        payload: filter

    }
}
export const CLEAR_ALL_FILTERS = () => {
    return {
        type: 'filters/clearAllFilters'
    }
}

export const ADD_SIZE_FILTER = (size) => {
    return {
        type:'filters/addSizeFilter',
        payload:size
    }
}

export const REMOVE_SIZE_FILTER = (size) => {
    return {
        type:'filters/removeSizeFilter',
        payload:size
    }
}

export const REMOVE_PRICE_FILTER = () => {
    return {
        type:'filters/removePriceFilter'
    }
}

export const ADD_COLOR_FILTER = (color) => {
    return {
        type:'filters/addColorFilter',
        payload: color
    }
}

export const REMOVE_COLOR_FILTER = (color) => {
    return {
        type:'filters/removeColorFilter',
        payload: color
    }
}

export const ADD_SORT_VALUE = (value) => {
    return {
        type:'sort/addValue',
        payload:value
    }
}

export const CLEAR_SORT = () => {
    return {
        type: 'sort/clearSort'
    }
}