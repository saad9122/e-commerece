import { womenShoesData } from "../womendata";


const initalState = womenShoesData;
export const womenShoesReducer = (womenShoes = initalState , actions) => {

    switch(actions.type) {
        case 'women/addToCart' : {

            womenShoes.map(ele => ele.id === actions.payload.id ? 
            {...womenShoes,available:womenShoes.available-actions.payload.available}: ele)} 

             default:return womenShoes
    }
}