import { kidsShoesData } from "../kidsShoesData";


const initalState = kidsShoesData;
export const kidsShoesReducer = (kidsShoes = initalState , actions) => {

    switch(actions.type) {
        case 'kids/addToCart' : {

            kidsShoes.map(ele => ele.id === actions.payload.id ? 
            {...kidsShoes,available:kidsShoes.available-actions.payload.available}: ele)} 

             default:return kidsShoes
    }
}

export const selectKidsShoes = state => state.kidsShoes