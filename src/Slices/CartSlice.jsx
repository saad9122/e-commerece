const initialState = [];
export const cartReducer = (cart =initialState ,actions) => {
    switch(actions.type){
        case 'addToCart' : {
            // const {id,name,price,size,available,images,gender,quantity,uniqueId} = product
            const isPresent = cart.find(ele => ele.uniqueId === actions.payload.uniqueId)

            if(isPresent) {
                return cart.map(ele => ele.uniqueId === actions.payload.uniqueId ? 
                {...ele,quantity:ele.quantity+actions.payload.quantity} : ele)
            } else {
                return [...cart,actions.payload]
            }
        }
        case 'removeFromCart' : {
           return cart.filter(ele => ele.uniqueId !== actions.payload.uniqueId)
        }
        case 'cart/updateCart' : {

            const newcart = cart.filter(ele => ele.uniqueId !== actions.payload
                .uniqueId)

            const newObject = {...actions.payload,size:actions.payload.size,quantity:actions.payload.quantity,
            uniqueId:actions.payload.id+actions.payload.size}

            const isPresent = newcart.find(ele => ele.uniqueId === newObject.uniqueId)

            if(isPresent) {
                return newcart.map(ele => ele.uniqueId === newObject.uniqueId ? 
                    newObject : ele)
            } else {
                return [...newcart,newObject]
            }
        }
        default: return cart
    }
}


export const selectCart = state => state.cart