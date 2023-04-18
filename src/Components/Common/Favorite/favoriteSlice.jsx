

export const favoriteReducer = (favorite = [],actions) => {

    switch(actions.type) {
        
        case 'addToFavorite' : {
        
        const isAvailable = favorite.find(shoe => shoe.id === actions.payload.id)

            if(isAvailable) {
                return favorite
            } else {
                return [...favorite,actions.payload]

            }     
        }
        case 'removeFromFavorite' : return favorite.filter(ele => ele.id !== actions.payload.id)
        default : return favorite 
    }
}
