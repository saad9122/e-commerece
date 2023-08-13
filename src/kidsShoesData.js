import KA1 from './assets/images/Kids/KP1/KA1.webp'
import KA2 from './assets/images/Kids/KP1/KA2.webp'
import KA3 from './assets/images/Kids/KP1/KA3.webp'
import KA4 from './assets/images/Kids/KP1/KA4.webp'

import KB1 from './assets/images/Kids/KP2/KB1.webp'
import KB2 from './assets/images/Kids/KP2/KB2.webp'
import KB3 from './assets/images/Kids/KP2/KB3.webp'
import KB4 from './assets/images/Kids/KP2/KB4.webp'

import KC1 from './assets/images/Kids/KP3/KC1.webp'
import KC2 from './assets/images/Kids/KP3/KC2.webp'
import KC3 from './assets/images/Kids/KP3/KC3.webp'
import KC4 from './assets/images/Kids/KP3/KC4.webp'

import KD1 from './assets/images/Kids/KP4/KD1.webp'
import KD2 from './assets/images/Kids/KP4/KD2.webp'
import KD3 from './assets/images/Kids/KP4/KD3.webp'
import KD4 from './assets/images/Kids/KP4/KD4.webp'

import KE1 from './assets/images/Kids/KP5/KE1.webp'
import KE2 from './assets/images/Kids/KP5/KE2.webp'
import KE3 from './assets/images/Kids/KP5/KE3.webp'
import KE4 from './assets/images/Kids/KP5/KE4.webp'

import KF1 from './assets/images/Kids/KP6/KF1.webp'
import KF2 from './assets/images/Kids/KP6/KF2.webp'
import KF3 from './assets/images/Kids/KP6/KF3.webp'
import KF4 from './assets/images/Kids/KP6/KF4.webp'


export const kidsShoesData= [
    {
        id:'KA',
        name:'Nike Air Force 1',
        price:195,
        sizes: [28,29,30,31,34,35],
        available:[11,13,19,11,8],
        images:[KA1,KA2,KA3,KA4],
        gender:'Kids',
        colors:['brown','white'],
        date: new Date (2023,3,10).getTime(),
        inWishList: false
    },
    {
        id:'KB',
        name:'Nike Force 1 Mid SE',
        price:160,
        sizes: [28,29,30,31,34,35],
        available:[11,13,19,11,8],
        images:[KB1,KB2,KB3,KB4],
        gender:'Kids',
        colors:['blue','white'],
        date: new Date (2023,3,11).getTime(),
        inWishList: false
    },
    {
        id:'KC',
        name:'Nike Force 1 Mid SE',
        price:195,
        sizes: [28,29,30,31,34,35],
        available:[11,13,19,11,8],
        images:[KC1,KC2,KC3,KC4],
        gender:'Kids',
        colors:['black','white'],
        date: new Date (2023,4,9).getTime(),
        inWishList: false
    },
    {
        id:'KD',
        name:'Nike Force 1 Low SE',
        price:195,
        sizes: [30,31,34,35],
        available:[11,13,19,11,8],
        images:[KD1,KD2,KD3,KD4],
        gender:'Kids',
        colors:['white'],
        date: new Date (2023,3,12).getTime(),
        inWishList: false
    },
    {
        id:'KE',
        name:'Nike Force 1 VV8',
        price:95,
        sizes: [28,29,30,31,32,33],
        available:[11,13,19,11,8],
        images:[KE1,KE2,KE3,KE4],
        gender:'Kids',
        colors:['red','white'],
        date: new Date (2023,3,10).getTime(),
        inWishList: false
    },
    {
        id:'KF',
        name:'Nike Force 1 VV8',
        price:215,
        sizes: [28,29,30,31,32,33],
        available:[11,13,19,11,8],
        images:[KF1,KF2,KF3,KF4],
        gender:'Kids',
        colors:['blue','white'],
        date: new Date (2023,3,10).getTime(),
        inWishList: false
    },
    
]

export const totalKidsSizes = [28,29,30,31,32,33,34]

const flatArray = kidsShoesData.reduce((accumaltor,shoe) => {
    return accumaltor.concat(shoe.colors)
},[])

export const totalKidsColors = flatArray.filter((color,index) => flatArray.indexOf(color)===index)